1. If characters are not alphabet, do nothing
* input: 4%
* output: 4%
2. If single letter, add "ay" to the end
* input: I
* output: Iay
3. If word starts with vowel, add "ay" to the end
* input: ice
* output: iceay
4. If word starts with one consonant, take the consonant to the end and add "ay"
* input: back
* output: ackbay
5. If word starts with multiple consonants, move the consonants before the vowel to the back and add "ay"
* input: that, thread
* output: atthay, eadthray
6. if word starts with "qu", add that to the back and add "ay"
* input: quilt
* output: iltquay
7. if word starts with _ qu... add those to the back and add "ay"
* input: squeal
* output: ealsquay
8. if "y" is the first character, treat as consonant
* input: yellow
* output: ellowyay
9. if "y" is not the first character, treat as vowel
* input: rhythm
* output: ythmrhay
10. capitals
* input: HELLO
* output: ELLOHAY
