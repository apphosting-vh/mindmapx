@echo off
rem ===========================================================================
rem  Mindx local launcher
rem
rem  The app is an ES-module bundle, so browsers will not run it from file://.
rem  This starts a tiny local web server and opens the app in the default
rem  browser. Works from the project root (serves dist\) or from an extracted
rem  "mindx-github-pages" folder (serves the folder next to this script).
rem ===========================================================================
setlocal EnableExtensions
cd /d "%~dp0"

set "PORT=8082"
set "ROOT=."
if exist "dist\index.html" set "ROOT=dist"
if not exist "%ROOT%\index.html" (
  echo.
  echo   Could not find the built app next to this launcher.
  echo   Run "npm run build" first, or use the launcher that ships with the
  echo   extracted mindx-github-pages folder.
  echo.
  pause
  exit /b 1
)

set "SERVER=%~dp0scripts\serve.mjs"
if not exist "%SERVER%" set "SERVER=%~dp0_serve.mjs"
if not exist "%SERVER%" (
  echo.
  echo   Could not find the bundled static server ^(scripts\serve.mjs^).
  echo.
  pause
  exit /b 1
)

where node >nul 2>nul
if not errorlevel 1 goto use_node

where python >nul 2>nul
if not errorlevel 1 goto use_python

echo.
echo   Mindx needs Node.js or Python to serve itself locally.
echo   Install Node.js from https://nodejs.org and try again.
echo.
pause
exit /b 1

:use_node
node "%SERVER%" %PORT% "%ROOT%"
exit /b %errorlevel%

:use_python
echo.
echo   Node.js not found - falling back to Python.
start "" http://localhost:%PORT%/
python -m http.server %PORT% --directory "%ROOT%"
exit /b %errorlevel%
