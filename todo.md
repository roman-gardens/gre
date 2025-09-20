# Reviewing draft articles

- [ ] Check for any comments within the text
- [ ] Deal with empty stuff that is now commented out (by deleting)
- [ ] Fix all links that have [text](#) or [text](link)

# Pompeii Notes/Issues

- [x] Green (additions to entries?). What to do? There appears to be ORANGE now as well.
- [x] Add span style color families to new green parts of entries.
- [ ] Someone should relook over the bibs to see if they know what book the author is referring to

# Random issues

- [ ] Bibliography first item actually two? https://roman-gardens.github.io/province/italia/rome/regio_x_palatium/domus_augustana/
- [ ] how to handle alternative names of a garden -- example https://roman-gardens.github.io/test-a/id/5c8aada6d5
- Can we show progress in number of gardens in each place?  ("23 out of 35 known gardens have been published")
- display metadata for place pages

# Images
- some photos we want lower resolution (so copyright holder can control access to full resolution)
- link to reuse/take-down policy in image captions
- set permissions on image repo to prevent deletion, modification?
- images: remove alt unless it provides additional info
- handle links in captions/credits
- remove "Credit: " from display of image credit?  (Review credit values to see if they can stand on their own?)

# Cleanup

- [ ] move content from garden entries to the province _index.md
- [ ] add gre_id/aliases for places, update citation example
- [ ] DON'T LINK place searches from place pages (only from garden pages)
- [ ] id shortcode for people? (perseus authors like "Pliny the Elder")
- [ ] backslashes \
- [ ] fix or remove empty links -- search for "(#)"
- [ ] update Leaflet from 1.6 to 1.9.4
- [ ] cleanup double/triple spaces (skip arabia-petragarden!) AFTER we have cleaned up spaces from image filenames
- should we rework the id shortcode to handle inline references?

# Keywords
- new meta page section showing UNLINKED keywords (literary gardens, etc.)
- keywords -- use glossary from GRE v.1
- keywords like lucus, nemus (recode as keyword "groves"?), oscilla, stagnum, textrina that are not proper AAT terms
- Search for any keywords mentioned in text that are not listed under the garden keywords
- public list of keywords as glossary (similiar to /meta page)

# from 2025 meetings
- [ ] people: Change Pleiades liaison from Gabriel to Tom Elliott?
- [ ] maps: fix/remove blank maps
- [ ] garden list sort order (currently alphabetical, but most recent first?)
- [ ] browse by province -- only list most recent updates?

# Documentation

- installing software on Mac
    - hugo
        - if brew isn't already installed:
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- [ ] use \" to escape any quotes within an image caption


# Article Guidelines

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
- comment out headers of any empty sections

# Questions/Discussion

- People names -- when to include middle initial?
- People links/pages for everyone, or just prominent contributors? (ALL)
- exedrae (AAT, indoor vs outdoor)
- linking words within paragraphs -- is this necessary?  too much?  consistent?
- listing pleiades authors as contributors to GRE? Example: https://roman-gardens.github.io/test-drafts/place/italia/region_x/tergeste/villa_of_the_bath/#contributor (doing so makes it look like they helped write the garden article)
- translator in frontmatter (2 gardens)
- in the text of the article, Divya suggested having dates at the top -- do we want both of these at top?  (They could also logically go near bottom, after bibliography and before keywords/places)
    - date of the garden (how to phrase this?  dates of use?)
    - excavation date
- double angle quotes like « Pluton » -- can these be converted to normal " quotes?
- what is green highlighting for???
    - Example: https://roman-gardens.github.io/test-drafts/place/italia/pompeii/region_i/insula_ix/house_5/house_of_the_fruit_orchard/
- add area editors to province pages?
- standardize and document recommendations for entry titles
    - House name, or house number, or both?
    - Roman or Arabic numerals? for region, insula, house (e.g. Pompeii VIII.4.30 vs VIII.iv.30)
- inline citations -- currently "(ALL CAPS 1895)" etc
- "Contribute" vs "Join" (Pleiades uses "Participate")


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
