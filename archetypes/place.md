---
{{- $id := substr (sha256 now) 0 10 }}
gre_id: "{{ $id }}"
aliases: [/id/{{ $id }}]
type: garden
title: {{ title (replace .Name "-" " ") }}
latlon: [ 0, 0 ]
author: AUTHOR ONE, AUTHOR TWO
editor: EDITOR ONE, EDITOR TWO, EDITOR THREE
date: {{ time.Now.Format "2006-01-02" }}
modified: {{ time.Now.Format "2006-01-02" }}
draft: true
---

## Dates
<!-- For now, include dates exactly as written in the document. We will revisit the question of date formatting once more data have been collected.  If no date, use "unspecified" -->

## Garden Description
<!-- This is the main text describing the garden -->

<!--
## Maps
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->

<!--
## Plans
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
-->

<!--
## Images
{{< image src="filename.ext" alt="ALT_TEXT" title="CAPTION" >}}
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
places containing this garden will be listed automatically
- {{< id vocab="Pleiades" id="" name="" >}}
- {{< id vocab="TGN" id="" name="" >}}
-->
