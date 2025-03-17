#!/bin/bash

git_root="$(git rev-parse --show-toplevel)"

(cd "${git_root}" && bazel run -- @pnpm//:pnpm i --dir "${git_root}"