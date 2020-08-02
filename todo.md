
# General

- [x] Make a really cool project
- [ ] Check all the keywords for one standard getty url
- [ ] Check for all comments containing some mention of "cross references", add links to relevant pages
- [ ] Go through punchlist for each article
- [ ] Get province information into general province page (somehow)
- [ ] Get keywords into tags list in header (as in bancroft example)
- [ ] Get geographic regions into sidebar using categories list (as in bancroft)
- [ ] Put `lead:` in the header for each article to make loglines/subtitles (e.g. Dalmatia/salona/salona_tomb...)
- [ ] Check that all keywords are in controlled vocab (Programmatically)
- [ ] Figure out why there are so many unattached images (e.g. Achaea Nemea)
- [ ] Deal with empty stuff in headers
- [ ] Should "urban villas" be removed and (if necessary) replaced with "villae urbanae"?
- [ ] Deal with all smart quotes
- [ ] Fix any quotes in `figure` attributes
- [ ] Redo all pub dates as YMD
- [ ] Implement [LOC Datetime format](https://www.loc.gov/standards/datetime/)
- [ ] Add a keyword that means "hasInscription"

# Article Punchlist

- Title in title case with spaces?
- Province `relref` correct?
- Location
  - folder `relref`
  - Pleiades ID
- Keywords, separated by newline (`\` at end of line)
- Sublocation `relref` present? -> comment out for now
- Pleiades ID
  - Numbers in link?
  - `"(Pleiades)"` in link? -> delete
  - Two links present, one with `relref` -> delete `relref`
- figures linked correctly?
- check all `ref`s to other gardens, should be `relref`s

# Articles in need of a second look

- achaea/athens/athens_neoplatonic..., no author
- achaea/corinth/corinth_circus, images with no links
- achaea/eua/villa..., editor seems to be author, no editor/author listed
- achaea/athens/athenian_schools, need to make sure this info gets in the right places
- ger sup/dietikon, no orcid for Christa Ebnöther
- ger sup/vallon, two map images are broken, replace with new


# Image cropping and straightening

- [x] achaea
- [ ] britannia
- [ ] dacia_traiana
- [ ] dalmatia
- [ ] germania_inferior
- [ ] germania_superior
- [ ] macedonia
- [ ] pannonia

# Pompeii Notes/Issues

- Titles (I.ii.10). Right now if a location doesn't have a specific name, using the I.ii.10 ID.
- [x] Artifacts: TBD on how to note
- [x] Green (additions to entries?). What to do? There appears to be ORANGE now as well.
- [x] Add span style color families to new green parts of entries.
- [ ] Someone should relook over the bibs to see if they know what book the author is referring to, as I can't figure it out with just an author last name.
- [ ] Insula relref I don't know if we want these, but if we do the way I have them are probably wrong.
- [ ] Image PATHs might need modifying.
- [x] Note to self: relook over entries and add [statue] keyword.
- [x] Note if it has literary evidence/artifacts.
- [ ] Issue: I have found a entry that is House of Epidius Fortunatus (I.iii.3) and another that is I.iii.3. If there is a distinction, should we make it clearer?
- [x] *Aedicula lararium* added as one keyword merged from the two currently listed.
- [ ] Should I include excavations dates in date section?
- [x] Province edits for keywords

# Pompeii Entries that Have...

## Inscriptions/Graffiti

- I.ii.6
- Caupona (I.ii.22): Fifteen *amphoras* with inscriptions.

## Artifacts

- I.ii.16 (A terra-cotta statuette of a seated old man holding a scroll in his right hand and wearing a short sleeved tunic (0.60 m. high; Mus. Naz. Inv. No. 109 622; Ruesh no. 453) served as a fountain)
- I.ii.17
  - a marble statuette of Venus, her left arm supported by a statuette (1.04 m. high; Mus Naz. inv. no. 109 608; Ruesch no. 1325).
  - Two small marble statuettes of toads (Mus. Nac. inv. no. 109 609, 109 610).
  - the one of two doves (Mus. Naz. inv. no. 120 407) found in the tablinum.
  - a marble head of a man identified as Agrippa, found cemented in a cup (total height 0.285 m.; Mus. Nac. inv. no. 109 611; Reusch no. 1081).
  - The marble statuette of Hercules wrapped in a lion skin (0.70 m. high; Mus. Nac. inv. no. 109 677).
- I.iii.23 (famous painting depicting the battle between the Nucerians and the Pompeians in the ampitheator (1.60 m. high by a little less than 2.00 m. wide; Mus. Naz. Inv. No. 112 222; Ruesch no. 1344))
- I.iii.25 A
  - a small marble head of Bacchus from a herm (Mus. Naz. inv. no. 110 653)
  - a small marble ram (Mus. Naz. inv. no. 120 357)
- I.iv.5/25

## Literary Evidence

- I.iii.23: Tacitus recorded the events portrayed in the painting.
