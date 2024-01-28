import React, { useEffect, useMemo, useState } from 'react';
import './PasswordModule.css';

function PasswordModule() {

    const allWords = useMemo(() => ["about", "after", "again", "below", "could",
                                    "every", "first", "found", "great", "house",
                                    "large", "learn", "never", "other", "place",
                                    "plant", "point", "right", "small", "sound",
                                    "spell", "still", "study", "their", "there",
                                    "these", "thing", "think", "three", "water",
                                    "where", "which", "world", "would", "write"], []);

    const [possibleWords, setPossibleWords] = useState(allWords)
    const [selected1stCharacters, setPossible1stCharacters] = useState<Set<string>>(new Set([]))
    const [selected2ndCharacters, setPossible2ndCharacters] = useState<Set<string>>(new Set([]))
    const [selected3rdCharacters, setPossible3rdCharacters] = useState<Set<string>>(new Set([]))
    const [selected4thCharacters, setPossible4thCharacters] = useState<Set<string>>(new Set([]))
    const [selected5thCharacters, setPossible5thCharacters] = useState<Set<string>>(new Set([]))

    useEffect(() => {
        let filteredWords = allWords
        if (selected1stCharacters.size > 0) { filteredWords = filteredWords.filter(word => selected1stCharacters.has(word.charAt(0))) }
        if (selected2ndCharacters.size > 0) { filteredWords = filteredWords.filter(word => selected2ndCharacters.has(word.charAt(1))) }
        if (selected3rdCharacters.size > 0) { filteredWords = filteredWords.filter(word => selected3rdCharacters.has(word.charAt(2))) }
        if (selected4thCharacters.size > 0) { filteredWords = filteredWords.filter(word => selected4thCharacters.has(word.charAt(3))) }
        if (selected5thCharacters.size > 0) { filteredWords = filteredWords.filter(word => selected5thCharacters.has(word.charAt(4))) }
        setPossibleWords(filteredWords)
    }, [selected1stCharacters, selected2ndCharacters, selected3rdCharacters, selected4thCharacters, selected5thCharacters, allWords])

    function getAllUniqueFirstCharacters(index: number): Set<string> {
        const firstCharacters = allWords.map((string) => string.charAt(index));
        return new Set(firstCharacters);
    }

    function getUniquePossibleFirstCharacters(index: number): Set<string> {
        const firstCharacters = possibleWords.map((string) => string.charAt(index));
        return new Set(firstCharacters);
    }

    function getCharClass(character: string, possibleChars: Set<string>, selectedChars: Set<string> ) {
        if (selectedChars.has(character)) { return "characterSelected" }
        if (possibleChars.has(character)) { return "possibleCharacter" }
        return ""
    }

    function updatePossible1stCharacters(character: string) {
        if (selected1stCharacters.has(character)) {
            selected1stCharacters.delete(character)
        } else {
            selected1stCharacters.add(character)
        }

        setPossible1stCharacters(new Set(selected1stCharacters))
    }

    function updatePossible2ndCharacters(character: string) {
        if (selected2ndCharacters.has(character)) {
            selected2ndCharacters.delete(character)
        } else {
            selected2ndCharacters.add(character)
        }
        setPossible2ndCharacters(new Set(selected2ndCharacters))
    }

    function updatePossible3rdCharacters(character: string) {
        if (selected3rdCharacters.has(character)) {
            selected3rdCharacters.delete(character)
        } else {
            selected3rdCharacters.add(character)
        }
        setPossible3rdCharacters(new Set(selected3rdCharacters))
    }

    function updatePossible4thCharacters(character: string) {
        if (selected4thCharacters.has(character)) {
            selected4thCharacters.delete(character)
        } else {
            selected4thCharacters.add(character)
        }
        setPossible4thCharacters(new Set(selected4thCharacters))
    }

    function updatePossible5thCharacters(character: string) {
        if (selected5thCharacters.has(character)) {
            selected5thCharacters.delete(character)
        } else {
            selected5thCharacters.add(character)
        }
        setPossible5thCharacters(new Set(selected5thCharacters))
    }

  return (
      <div>
          <h3>Password</h3>
          <div className="possibleWords">{possibleWords.sort((a, b) => a.localeCompare(b)).map(item => item).join(', ')}</div>

          <div className="grid">
              <div>
                  <div className="characterCount">{getUniquePossibleFirstCharacters(0).size}</div>
                  {Array.from(getAllUniqueFirstCharacters(0).values()).sort((a, b) => a.localeCompare(b)).map(x =>
                      <div className={getCharClass(x, getUniquePossibleFirstCharacters(0), selected1stCharacters)} onClick={() => updatePossible1stCharacters(x)}>{x}</div>)}
              </div>
              <div>
                  <div className="characterCount">{getUniquePossibleFirstCharacters(1).size}</div>
                  {Array.from(getAllUniqueFirstCharacters(1).values()).sort((a, b) => a.localeCompare(b)).map(x =>
                      <div className={getCharClass(x, getUniquePossibleFirstCharacters(1), selected2ndCharacters)} onClick={() => updatePossible2ndCharacters(x)}>{x}</div>)}
              </div>
              <div>
                  <div className="characterCount">{getUniquePossibleFirstCharacters(2).size}</div>
                  {Array.from(getAllUniqueFirstCharacters(2).values()).sort((a, b) => a.localeCompare(b)).map(x =>
                      <div className={getCharClass(x, getUniquePossibleFirstCharacters(2), selected3rdCharacters)} onClick={() => updatePossible3rdCharacters(x)}>{x}</div>)}
              </div>
              <div>
                  <div className="characterCount">{getUniquePossibleFirstCharacters(3).size}</div>
                  {Array.from(getAllUniqueFirstCharacters(3).values()).sort((a, b) => a.localeCompare(b)).map(x =>
                      <div className={getCharClass(x, getUniquePossibleFirstCharacters(3), selected4thCharacters)} onClick={() => updatePossible4thCharacters(x)}>{x}</div>)}
              </div>
              <div>
                  <div className="characterCount">{getUniquePossibleFirstCharacters(4).size}</div>
                  {Array.from(getAllUniqueFirstCharacters(4).values()).sort((a, b) => a.localeCompare(b)).map(x =>
                      <div className={getCharClass(x, getUniquePossibleFirstCharacters(4), selected5thCharacters)} onClick={() => updatePossible5thCharacters(x)}>{x}</div>)}
              </div >
          </div>      
      </div>
  );
}

export default PasswordModule;