# Topic:

> Курс Udemy https://youtu.be/1DklrGoAxDE?t=20265

Зроблено так само як в нього :

```
return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={Login} />
      </BrowserRouter>
    );
```

Але з'являється така помилка -> **_A Route is only ever to be used as the child of Routes element, never rendered directly. Please wrap your Route in a Routes._**

_скрін кидав в тг_

---

## DB

я використав json-server,

`react-db.json` -> дб

`json-server react-db.json --watch --port=5050` обов'язково порт 5050, бо http в fetch саме з тим портом.
Підєднано все добре і працює тільки роутинг проблема
