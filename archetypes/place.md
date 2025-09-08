---
{{- $id := substr (sha256 now) 0 10 }}
gre_id: {{ $id }}
aliases: [/id/{{ $id }}]
type: place
title: {{ title (replaceRE `[-_]` " " .Name) }}
latlon: [ 0, 0 ]
author: Author Name
contributor: Contributor Name
date: {{ time.Now.Format "2006-01-02" }}
modified: {{ time.Now.Format "2006-01-02" }}
draft: true
---

<!-- ## Dates -->

## Place Description

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
- {{< keyword "Example keyword" >}}
-->

<!--
## Places
- {{< id vocab="Pleiades" id="" name="" >}}
- {{< id vocab="TGN" id="" name="" >}}
-->
