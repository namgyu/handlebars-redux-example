function counter(state, action) {
  if (typeof state === 'undefined') {
    return {
      countNum : 0
    };
  }

  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        countNum : state.countNum + 1
      });

    case 'DECREMENT':
      return Object.assign({}, state, {
        countNum : state.countNum - 1
      });

    default:
      return state;
  }
}

function initTemplate() {
  var tmplSrc = document.getElementById("counter-template").innerHTML;
  var tmpl = Handlebars.compile(tmplSrc);

  document.getElementById("counterApp").innerHTML = tmpl(store.getState());
}

function render() {
  document.getElementById('value').innerHTML = store.getState().countNum.toString();
}

var store = Redux.createStore(counter);

initTemplate();
render();
store.subscribe(render);

document.getElementById('increment')
.addEventListener('click', function () {
  store.dispatch({type: 'INCREMENT'});
});

document.getElementById('decrement')
.addEventListener('click', function () {
  store.dispatch({type: 'DECREMENT'});
});

document.getElementById('incrementIfOdd')
.addEventListener('click', function () {
  if (store.getState().countNum % 2 !== 0) {
    store.dispatch({type: 'INCREMENT'});
  }
});

document.getElementById('incrementAsync')
.addEventListener('click', function () {
  setTimeout(function() {
    store.dispatch({type: 'INCREMENT'});
  }, 1000);
});
