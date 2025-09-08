---
{{- $id := substr (sha256 now) 0 10 }}
gre_id: {{ $id }}
aliases: [/id/{{ $id }}]
type: garden
title: {{ title (replaceRE `[-_]` " " .Name) }}
latlon: [ 0, 0 ]
author: Author Name
translator: Translator Name
contributor: Contributor Name
date: {{ time.Now.Format "2006-01-02" }}
modified: {{ time.Now.Format "2006-01-02" }}
draft: true
---

## Dates
<!-- For now, include dates exactly as written in the document. We will revisit the question of date formatting once more data have been collected.  If no date, use "unspecified" -->

## Excavation Dates
<!-- format as YYYY, or YYYY-YYYY -->

## Garden Description
<!-- This is the main text describing the garden -->

<!--
## Maps
{{< image file="filename.jpg" caption="" credit="" alt="" >}}
-->

<!--
## Plans
{{< image file="filename.jpg" caption="" credit="" alt="" >}}
-->

<!--
## Images
{{< image file="filename.jpg" caption="" credit="" alt="" >}}
-->

<!--
## Bibliography
- BIB_ENTRY [(worldcat)](WORLDCAT_LINK_URL)
-->

<!--
## Keywords
- {{< keyword "example" >}}
-->

<!--
## Places
places containing this garden will be listed automatically
- {{< id vocab="Pleiades" id="" name="" >}}
- {{< id vocab="TGN" id="" name="" >}}
-->
