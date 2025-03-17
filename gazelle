#!/bin/bash

git_root="$(git rev-parse --show-toplevel)"

# export BUILD_WORKING_DIRECTORY="${git_root}"
export BUILD_WORKSPACE_DIRECTORY="${git_root}"

echo "## Aspect gazelle"
"${git_root}/tools/aspect-gazelle" "$@" 2>&1 | grep -v "gazelle:java_maven_install_file" >&2

echo
echo "## Local gazelle"
(cd "${git_root}" && bazel run --config=silent gazelle "$@")
