import superagent from 'superagent';

const API = 'http://acor.sl.pt:7777';

export function fetch(path) {
  return new Promise((resolve, reject) => {
    superagent(API + path).end((err, res) => {
      if (err || !res.ok) {
        return reject(err);
      }
      resolve(res.body);
    });
  });
}
