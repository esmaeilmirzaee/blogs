const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../src/content');
let postLists = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('filed to load contents of directory.' + err);
    }
    // console.log(files);
    files.forEach((file, index) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
        const getMetaDataIndicies = (acc, element, index) => {
          if (/^---/.test(element)) {
            acc.push(index);
          }
          return acc;
        };
        const parseMetaData = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            let metaData = lines.slice(
              metaDataIndices[0] + 1,
              metaDataIndices[1]
            );
            metaData.forEach((line) => {
              obj[line.split(': ')[0]] = line.split(': ')[1];
            });

            return obj;
          }
        };
        const parseContent = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            lines = lines.slice(metaDataIndices[1] + 1, lines.length);
          }
          return lines.join('\n');
        };
        const lines = contents.split('\n');
        const metaDataIndices = lines.reduce(getMetaDataIndicies, []); // a-> function, b->initial value
        const metaData = parseMetaData({ lines, metaDataIndices });
        const content = parseContent({ lines, metaDataIndices });
        post = {
          id: index + 1,
          title: metaData.title ? metaData.title : 'Without title',
          author: metaData.author ? metaData.author : 'Unknown',
          date: metaData.date ? metaData.date : 'Today--unspecified',
          content: content ? content : 'Empty',
        };
        postLists.push(post);
        console.log(postLists.length);
        if (postLists.length === files.length) {
          console.log('Generating files...');
          let data = JSON.stringify(postLists);
          fs.writeFileSync('src/posts.json', data);
        }
      });
    });
  });
  return;
};

getPosts();
