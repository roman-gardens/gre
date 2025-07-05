# General

- [ ] Check for all comments containing some mention of "cross references", add links to relevant pages
- [ ] Deal with empty stuff that is now commented out (by deleting)
- [ ] Add a takedown notice (copy from DCAA/DSCC)
- [ ] Finish creating documentation
- [ ] Fix all links that have [text](#) or [text](link)
- [ ] fix search for plurals (lunr matches the singular, but then we can't highlight in the snippet)
- [ ] consider finding places in search (not just gardens)

# Pompeii Notes/Issues

- [x] Green (additions to entries?). What to do? There appears to be ORANGE now as well.
- [x] Add span style color families to new green parts of entries.
- [ ] Someone should relook over the bibs to see if they know what book the author is referring to, as I can't figure it out with just an author last name.
- [x] Note to self: relook over entries and add [statue] keyword (check this AFTER province/location descriptions have been moved out the garden articles)

# Random issues

- [ ] recover gallia aquitania entries? https://github.com/roman-gardens/gre/commit/06b191b293c531a31dca04631b02d031a3a1b32d
- [ ] document how theme files should be edited (not in mainroad directory!)
- [ ] Bibliography first item actually two? https://roman-gardens.github.io/province/italia/rome/regio_x_palatium/domus_augustana/
- [ ] how to handle alternative names of a garden -- example https://roman-gardens.github.io/test-a/id/5c8aada6d5
- [ ] many dupl images in thugga -- warning!  the "2" image may be older (missing additional label/green patch)
- [ ] some photos we want lower resolution (so copyright holder can control access to full resolution)
- [ ] link to reuse/take-down policy in image captions
- [ ] generally improve the search


# Cleanup

- set permissions on image repo to prevent deletion, modification?
- [ ] images: remove alt unless it provides additional info
- [ ] move content from garden entries to the province _index.md
- [ ] add gre_id/aliases for places, update citation example
- [ ] DON'T LINK place searches from place pages (only from garden pages)
- [ ] move keywords to below bibliography
- [ ] id shortcode for people (perseus authors like "Pliny the Elder")
- [ ] excavation dates -- missing from archetype and some gardens
- [ ] rename ## Places to something like "Linked Places" or "Place IDs" (should people be listed under Keywords or Linked IDs or have their own section?)
- [ ] backslashes \
- [ ] search: use lunr to remove stopwords from searches (doing this manually for just a few words now: the of at etc.)
- [ ] fix or remove empty links -- search for "(#)"
- [ ] update Leaflet from 1.6 to 1.9.4
- [ ] cleanup double/triple spaces (skip arabia-petragarden!) AFTER we have cleaned up spaces from image filenames







# from 2025-03-04, 2025-04-04, 2025-05-06, 2025-06-11 meetings

- [ ] when we restart blog/news, add the posting date and snippet to the list of posts
- [ ] people: Change Pleiades liaison from Gabriel to Tom Elliott?
- [ ] maps: fix/remove blank maps
- [ ] public list of keywords as glossary (similiar to /meta page)
- [ ] garden list sort order (currently alphabetical, but most recent first?)
- [ ] browse by province -- only list most recent updates?

# Documentation

- installing software on Windows
    - vscode
    - git
        - On Windows: winget
    - hugo
        - winget install Hugo.Hugo
        - winget upgrade hugo
- installing software on Mac
    - vscode
    - git
    - hugo
        - brew install hugo
        - Or, if using MacPorts: sudo port install hugo
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
    - contributor
        - your name goes here!
    - date
        - original publication date (update this when you are ready to publish)
    - modified
        - update this if there are significant edits later
- images
    - guidelines for image filename, size, format
    - new images can be added to the gre-images repo via the GitHub website
    - upload images to the same place in the province hierarchy as the article is
    - to add the image to an article, type "image" and press CTRL-SPACE and select "GRE image shortcut"
    - check the hugo server preview to check if the image is linked correctly
    - file = filename and extension "my-image.jpg"
    - caption = caption text (should all figures be numbered for the article??)
    - credit = "Drawing by...", "Gauckler, P., 1904, pp.16-17", etc. -- standardize format?
    - alt = "" in most cases, unless we want to add additional description when the reader cannot see the image -- see https://webaim.org/techniques/alttext/ for guidance
- bibliography
- keywords
    - to add a keyword, type "keyword" and press CTRL-SPACE and select "GRE keyword shortcut"
- places
    - to add a place, type "id" and press CTRL-SPACE and select "GRE id shortcut"
- comment out headers of any empty sections

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
    - date of the garden (how to phrase this?  dates of use?)
    - excavation date
- double angle quotes like « Pluton » -- can these be converted to normal " quotes
- what is green highlighting for???
    - Example: https://roman-gardens.github.io/test-drafts/place/italia/pompeii/region_i/insula_ix/house_5/house_of_the_fruit_orchard/
- add area editors to province pages?


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
