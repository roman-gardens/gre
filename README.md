# Gardens of the Roman Empire Project

This repo contains the entirety of the *Gardens of the Roman Empire* project, including the Hugo website being built as part of the ISAW Summer Internship.

## Hugo

This site is built using [Hugo](https://gohugo.io) with the [Mainroad](https://themes.gohugo.io/mainroad/) theme.

## Basic Development

Create new garden pages using the command: `hugo new garden/GARDEN_NAME`

`GARDEN_NAME` should be the full name of the garden as it will be written in the article, with any spaces replaced with underscores, plus the extension `.md`.
E.g.:

Garden Title: *Big Two-Hearted River*
File name: `big_two-hearted_river.md`

## Committing changes

The usual procedure for regenerating the Hugo site and committing the changes should work fine, provided that you delete the old Hugo-generated site by deleting the `docs` folder.

You may also run the bash script using the command `sh update_site.sh [COMMIT_MESSAGE]`, where `COMMIT_MESSAGE` is an optional user-defined addition to the standard message. 

