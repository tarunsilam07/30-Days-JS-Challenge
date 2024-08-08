

// Task 5 Word Ladder 

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (wordSet.has(beginWord)) wordSet.delete(beginWord);

    const queue = [];
    queue.push([beginWord, 1]);

    while (queue.length > 0) {
        const [word, level] = queue.shift();

        if (word === endWord) {
            return level;
        }

        for (let i = 0; i < word.length; i++) {
            let str = word;

            for (let ch = 97; ch <= 122; ch++) { 
                str = word.slice(0, i) + String.fromCharCode(ch) + word.slice(i + 1);

                if (wordSet.has(str)) {
                    queue.push([str, level + 1]);
                    wordSet.delete(str);
                }
            }
        }
    }
    
    return 0;
}

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"])); 
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));
