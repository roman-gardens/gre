# New for Launch on April 15, 2021
- [ ] (People page?) Page should have an alphabetical list of authors with hyperlinks to searches for those names, so that if someone clicks on it, it pulls up the search results for that author.

# General

- [ ] Check for all comments containing some mention of "cross references", add links to relevant pages
- [ ] Get province information into general province page (somehow)
- [ ] Figure out why there are so many unattached images (e.g. Achaea Nemea has a figure which is not in the proper images folder)
- [x] Deal with empty stuff in headers (by commenting out for now)
- [ ] Deal with empty stuff that is now commented out (by deleting)
- [ ] Add a takedown notice (copy from DCAA/DSCC)
- [x] Suppress empty headings
- [ ] Finish creating documentation
- [ ] Fix all links that have [text](#) or [text](link)
- [ ] fix search for plurals (lunr matches the singular, but then we can't highlight in the snippet)

# Articles in need of a second look

- achaea/corinth/corinth_circus, images with no links (image folder empty -JEM)
- ger sup/dietikon, no orcid for Christa Ebnöther
- ger sup/vallon, two map images are broken, replace with new


# Pompeii Notes/Issues

- Titles (I.ii.10). Right now if a location doesn't have a specific name, using the I.ii.10 ID.
- [x] Artifacts: TBD on how to note
- [x] Green (additions to entries?). What to do? There appears to be ORANGE now as well.
- [x] Add span style color families to new green parts of entries.
- [ ] Someone should relook over the bibs to see if they know what book the author is referring to, as I can't figure it out with just an author last name.
- [x] Note to self: relook over entries and add [statue] keyword.
- [x] Note if it has literary evidence/artifacts.
- [x] Issue: I have found a entry that is House of Epidius Fortunatus (I.iii.3) and another that is I.iii.3. If there is a distinction, should we make it clearer?
- [x] *Aedicula lararium* added as one keyword merged from the two currently listed.

# Random issues

- [ ] recover gallia aquitania entries? https://github.com/roman-gardens/gre/commit/06b191b293c531a31dca04631b02d031a3a1b32d
- [ ] document how theme files should be edited (not in mainroad directory!)
- [ ] Bibliography first item actually two? https://roman-gardens.github.io/province/italia/rome/regio_x_palatium/domus_augustana/
- [ ] how to handle alternative names of a garden -- example https://roman-gardens.github.io/test-a/id/5c8aada6d5

# Images

- [ ] many dupl images in thugga -- warning!  the "2" image may be older (missing additional label/green patch)
- [ ] some photos we want lower resolution (so copyright holder can control access to full resolution)
- [ ] link to reuse/take-down policy in image captions
- RENAME IMAGE SHORTCODE PARAMETERS???
    - check that alt and title are redundant
    - rename title to "caption"?
    - separate "credits" param

# Cleanup

- [ ] move ## Contributor to frontmatter author/editor
- [ ] id shortcode for people (perseus authors like "Pliny the Elder")
- [ ] excavation dates -- missing from archetype and some gardens
- [ ] move content from garden entries to the province _index.md
- [ ] "contributor" instead of "editor" in front matter
- [ ] rename ## Places to something like "Linked Places" or Place IDs (should people be listed under Keywords or Linked IDs or have their own section?)
- [ ] add gre_id/aliases for places, update citation example
- [ ] backslashes \
- [ ] DON'T LINK place searches from place pages (only from garden pages)
- [ ] search: use lunr to remove stopwords from searches

# from 2025-03-04, 2025-04-04, 2025-05-06, 2025-06-11 meetings

- [ ] when we restart blog/news, add the posting date and snippet to the list of posts
- [ ] people: Change Pleiades liaison from Gabriel to Tom Elliott?
- [ ] maps: fix/remove blank maps
- [ ] public list of keywords as glossary (similiar to /meta page)
- [ ] garden list sort order (currently alphabetical, but most recent first?)
- [ ] browse by province -- only list most recent updates?
- [ ] fix or remove empty links -- search for "(#)"


# Documentation

- [ ] snippets for shortcodes! id, image, keyword (type and then press CTRL-SPACE)
- [ ] use \" to escape any quotes within a caption
- [ ] frontmatter quoting: omit, unless ambiguous
- [ ] standardize and document recommendations for entry titles
    - [ ] House name, or house number, or both?
    - [ ] Roman/Arabic numerals for region, insula, house (e.g. Pompeii VIII.4.30 vs VIII.iv.30)
    - [ ] ideally, don't depend on upper/lowercase for meaning
- [ ] rewrite software setup
- [ ] workflow for simplest way to add a new garden/place? ("hugo new" requires path, but will set the GRE_ID, etc.)

# Article Guidelines

- filename
    - all lowercase, no special characters (a-z 0-9 _ - . only, NO SPACES!)
- frontmatter
    - title
        - in title case with proper punctuation as needed
        - use proper diacritics (TODO: guidance on how to add diacritics -- maybe a )
        - escape any double-quotes with backslash \"
    - latlon (if known)
        - in the hugo server preview, zoom map to location
        - CTRL-CLICK the map to copy the coordinates
        - paste into the "latlon" field in the frontmatter
    - author
        - of the article text
    - editor
        - your name goes here!
    - date
        - original publication date (update this when you are ready to publish)
    - modified
        - update this if there are significant edits later
- images
    - new images can be added to the gre-images repo via the GitHub website
    - upload images to the same place in the province hierarchy as the article is
    - to add the image to an article, type "image" and press CTRL-SPACE and select "GRE image shortcut"
    - check the hugo server preview to check if the image is linked correctly
- bibliography
- keywords
    - to add a keyword, type "keyword" and press CTRL-SPACE and select "GRE keyword shortcut"
- places
    - to add a place, type "id" and press CTRL-SPACE and select "GRE id shortcut"

# Questions/Discussion

- People names -- when to include middle initial?
- People links/pages for everyone, or just prominent contributors?
- keywords like lucus, stagnum, textrina that are not proper AAT terms
- "literary gardens" keyword okay, but do we really need "archaeological gardens"? (currently commented out in the relatively few articles that have it, but nearly all the gardens are arch.)
- exedrae (AAT, indoor vs outdoor)
- linking words within paragraphs -- is this necessary?  too much?  consistent?
- listing pleiades authors as contributors to GRE? Example: https://roman-gardens.github.io/test-drafts/place/italia/region_x/tergeste/villa_of_the_bath/#contributor (doing so makes it look like they helped write the garden article)
- translator in frontmatter (2 gardens)
- in the text of the article, Divya suggested having dates at the top -- do we want both of these at top?  (They could also logically go near bottom, after bibliography and before keywords/places)
    - date of the garden
    - excavation date



# User forks

User forks of the old GRE repo that have updates, as of 2025-03-26:
- [ ] [amartyashri](https://github.com/roman-gardens/gre-archive-2025-06-04/compare/main...amartyashri:gre-archive-2025-06-04:master) (Amartya Shri) - 28 files in Achaea, Pleaides links, removed empty sections
- [ ] [crc034](https://github.com/roman-gardens/gre-archive-2025-06-04/compare/main...crc034:gre-archive-2025-06-04:master) (Clarie Campbell, Univ. Arkansas) - 4 files in Italia: draft=false, ignore /docs files
- [ ] [jemillar](https://github.com/roman-gardens/gre-archive-2025-06-04/compare/main...jemillar:gre-archive-2025-06-04:master) (Jane Millar, UT Austin) - 36 files in Achaea, Germania Inferior, Italia: links, tags, etc.
- [ ] [joshuarosenheim](https://github.com/roman-gardens/gre-archive-2025-06-04/compare/main...joshuarosenheim:gre-archive-2025-06-04:master) (Joshua Rosenheim, Cornell) - 9 files in Italia (Ostia and Rome): coordinates, but beware some files have moved
- [x] LXB41 (Leigh-Ann Bedal, Penn State) - updates already in gre/main

Users with forks that have no updates:
- dmratzan (David Ratzan, ISAW)
- DorscJ (June Dorsch, ISAW)
- emacaulaylewis (Elizabeth Macaulay, CUNY)
- jlvenner (Jessica Venner, Univ. Birmingham)
- Kiara1980 (Kiara Beaulieu, Univ. Antwerp)
- KJTS (Kaja Tally Schumacher, formerly Cornell, now at Harvard)
- klg16 (Kathy Gleason, Cornell)
- mmeyer5 (Max Meyer, Cornell alum, now at Brown)
- rmpare (Rhiannon Pare, Princeton)
- worldofyuki (?)
- XueXia329 (Xue Xia, Cornell alum)
- yifanli7 (Yifan Li, Cornell alum)
- yK755 (Yaniv Korman, Cornell alum)
