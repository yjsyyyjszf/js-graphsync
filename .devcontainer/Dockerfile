#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

# To fully customize the contents of this image, use the following Dockerfile instead:
# https://github.com/microsoft/vscode-dev-containers/tree/v0.128.0/containers/javascript-node-14/.devcontainer/Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] Uncomment this section to install additional packages. **
#
#RUN apt-get update \
#    && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends golang


# install go-ipfs (based on https://docs.ipfs.io/how-to/command-line-quick-start/#install-ipfs)
RUN wget https://github.com/ipfs/go-ipfs/releases/download/v0.6.0/go-ipfs_v0.6.0_linux-amd64.tar.gz \
    && tar -xvzf go-ipfs_v0.6.0_linux-amd64.tar.gz \
    && cd go-ipfs \
    && bash install.sh

# install google protobuf compiler
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip \
    && unzip -d /usr/local protoc-3.13.0-linux-x86_64.zip \
    && chmod +x /usr/local/bin/protoc

#install golang
RUN wget https://golang.org/dl/go1.15.2.linux-amd64.tar.gz \
    && tar -C /usr/local -xzf go1.15.2.linux-amd64.tar.gz 

RUN echo "export PATH=\$PATH:/usr/local/go/bin" >> /etc/bash.bashrc
