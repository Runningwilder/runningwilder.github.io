import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactMarkdown from 'markdown-to-jsx'
import { Grid, Typography, Link } from '@material-ui/core'

ReactDOM.render(
  <>
    <Grid container  spacing = {2}>
      <Grid item xs={12}>
        <Typography>Runningwild</Typography>
        <Typography>
          <Link href = "https://www.youtube.com/channel/UCLwVj1QJA6jfyuAyRKT7kGA?view_as=subscriber">
            YouTube
          </Link>
        </Typography>
      </Grid >
      <Grid item xs={12}>
        <ReactMarkdown>
          {`
          testt
##Здесь будут мои новости
###_Новость 1 - 7.10.2020_
Создал этот прекрасный сайт :)

---

###_Новость 0 - 7.10.2020_
Запустил сайт на реакте + спринге - [https://surveyeveryone.ddns.net/](https://surveyeveryone.ddns.net/)
         
---

         `}
        </ReactMarkdown>
      </Grid>
    </Grid>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
