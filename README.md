# openshift-nodejs-new-cartridge
Install any version of nodejs using diy cartridge automatically.

# Choose node version
Choosing one version in https://nodejs.org/dist/, and write in the file `NODE_VERSION` at project root directory.  
When starting the cartridge, it will check current nodejs version. If the version mismatch, it will download correct version and delete old version.

# Stroage position
Binary file will be store at `$OPENSHIFT_DATA_DIR/bin/` and config will be store at `$OPENSHIFT_DATA_DIR/home/`.

# Environment variables
```
HOME:    Change to "$OPENSHIFT_DATA_DIR/home/" because "$OPENSHIFT_HOMEDIR" is read-only.
BINPATH: Nodejs binary path. This will be added to $PATH.
IP:      The IP that the app should bind
PORT:    The PORT that the app should bind
```
