const getSum = (str1, str2) => {

  if (isNaN(+str1) || typeof str1 === 'number' || typeof str1 === 'object') {
    return false
  }
  if (isNaN(+str2) || typeof str2 === 'number' || typeof str2 === 'object') {
    return false
  }
  return (+str1 + +str2).toString()
}

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let posts = 0;
  let comments = 0;
  listOfPosts.forEach(el => {
    if (el.author === authorName) {
      posts++
    }
    if (el.comments) {
      el.comments.forEach(comment => {
        if (comment.author === authorName) {
          comments++
        }
      })
    }
  });
  return `Post:${posts},comments:${comments}`;
}

const tickets = (people) => {
  let casse = {
    '25': 0,
    '50': 0,
    '100': 0
  }
  for (let person of people) {
    if (+person === 25) {
      casse['25']++
    }
    if (+person === 50) {
      casse['50']++;
      if (casse['25']) {
        casse['25']--
      } else {
        return "NO"
      }
    }
    if (+person === 100) {
      casse['100']++;
      if (casse['25'] >= 1 && casse['50'] >= 1) {
        casse['25']--;
        casse['50']--
      } else {
        if (casse['25'] >= 3 && casse['50'] === 0) {
          casse['25'] -= 3;
        } else {
          return "NO"
        }
      }
    }
  }
  return "YES";
}


module.exports = {
  getSum,
  getQuantityPostsByAuthor,
  tickets
}