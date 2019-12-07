import axios from 'axios';

export const API = 'http://acor.sl.pt:7777';

export function fetch(path) {
  return new Promise((resolve, reject) => {
    axios.get(API + path).then(
      function(response) {
        resolve(response.data);
      },
      function(error) {
        return reject(error);
      }
    );
  });
}

export function getTeamLogo(id) {
  return `http://acor.sl.pt:7777/logos/${id}.png`;
}

/*
import request from 'superagent';

const API = 'http://acor.sl.pt:7777';

export function fetch(path) {
  return new Promise((resolve, reject) => {
    request.get(API + path).end((err, res) => {
      if (err || !res.ok) {
        return reject(err);
      }
      resolve(res.body);
    });
  });
}

export function getTeamLogo(id) {
  return `http://acor.sl.pt:7777/logos/${id}.png`;
}
*/
