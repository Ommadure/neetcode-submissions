class Solution {
  encode(strs) {
    let lengths = [];
    let body = '';

    for (let i = 0; i < strs.length; i++) {
      lengths.push(strs[i].length);
      body = body + strs[i];
    }

    // header = "3,0,2", then '#', then all strings joined
    return lengths.join(',') + '#' + body;
  }

  decode(str) {
    // The header only has digits and commas, so the FIRST '#' always ends it
    let hashIndex = str.indexOf('#');
    let header = str.slice(0, hashIndex);
    let body = str.slice(hashIndex + 1);

    if (header === '') {
      return []; // no strings were encoded
    }

    let lengths = header.split(',');
    let result = [];
    let start = 0;

    for (let i = 0; i < lengths.length; i++) {
      let len = Number(lengths[i]);
      result.push(body.slice(start, start + len));
      start = start + len;
    }

    return result;
  }
}