---
{{- $id := substr (sha256 now) 0 10 }}
gre_id: "{{ $id }}"
aliases: [/id/{{ $id }}]
title: {{ title (replace .Name "-" " ") }}
latlon: [ 0, 0 ]
author: AUTHOR ONE, AUTHOR TWO
editor: EDITOR ONE, EDITOR TWO, EDITOR THREE
date: {{ time.Now.Format "2006-01-02" }}
draft: true
---

## Dates
<!-- For now, include dates exactly as written in the document. We will revisit the question of date formatting once more data have been collected.  If no date, use "unspecified" -->


## Garden Description

<!-- This is the main text describing the garden -->


## Maps

<!--
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->


## Plans

<!--
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->


## Images

<!--
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->


## Bibliography
<!--
- BIB_ENTRY [(worldcat)](WORLDCAT_LINK_URL)
-->


## Keywords

<!-- [piscinae](http://vocab.getty.edu/page/aat/300375619), []() -->


## Linked IDs

<!--
Type can be "pleiades", "tgn", "powo", "aat", etc.
Title should be the label used by the linked resource
{{< id type="pleiades" id="" title="" >}}
{{< id type="tgn" id="" title="" >}}
-->
