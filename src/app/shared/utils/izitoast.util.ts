const iziToast = require('izitoast');

export default function (title: string, msg: string, type?: string, pos?) {
  let _type = 'info';
  const _pos = pos || 'topRight';
  switch (type) {
    case 'info': _type = 'blue'; break;
    case 'warning': _type = 'yellow'; break;
    case 'error': _type = 'red'; break;
    case 'success': _type = 'green'; break;
    default: _type = 'blue';
  }
  iziToast.show({
    color: _type,
    title: title,
    message: msg,
    position: _pos
  });
}
