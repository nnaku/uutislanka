import React, { Fragment, useState, useEffect } from 'react';
import { Typography, Grid, Chip, TextField } from '@material-ui/core';
import cl from 'classnames';



function Root({ classes }) {
  const [defaults, setDefaults] = useState(JSON.parse(localStorage.getItem('/')))
  const [newDefault, setNewDefault] = useState('')
  const [ignore, setIgnore] = useState(JSON.parse(localStorage.getItem('ignore')))
  const [newIgnore, setNewIgnore] = useState('')

  useEffect(() => {
    localStorage.setItem('/', JSON.stringify(defaults))
  }, [defaults])

  useEffect(() => {
    localStorage.setItem('ignore', JSON.stringify(ignore))
  }, [ignore])

  function makeAddHandler({ target, type }){
      let { value, name } = target
      if (value.endsWith(",") || (type === "blur" && value)) {
        if(name === 'defaults'){
          setDefaults([...defaults, value.replace(",", "").toLowerCase()])
          setNewDefault('')
        }else{
          setIgnore([...ignore, value.replace(",", "").toLowerCase()])
          setNewIgnore('')
        }
      
        setNewDefault('')
      } else {
        if(name === 'defaults'){
          setNewDefault(value)
        }else{
          setNewIgnore(value)
        }
        
      }
    }
  
  function makeDefDelHandler(element) {
    return function () {
      setDefaults(defaults.filter(e => e !== element))
    }
  }

  function makeIgnDelHandler(element) {
    return function () {
      setIgnore(ignore.filter(e => e !== element))
    }
  }

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Tuoreimmat</Typography>
          <div>
            {defaults.map(item => <Chip
              label={item}
              name=""
              onDelete={makeDefDelHandler(item)}
              className={classes.chip}
              color="primary"
            />)}
          </div>
          <TextField
            label="Add to defaults"
            name="defaults"
            className={classes.textField}
            value={newDefault}
            onChange={makeAddHandler}
            onBlur={makeAddHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Ignore</Typography>
          <div>
            {ignore.map(item => <Chip
              label={item}
              onDelete={makeIgnDelHandler(item)}
              className={classes.chip}
              color="primary"
            />)}
          </div>
          <TextField
            label="Add to ignore"
            name="ignore"
            className={classes.textField}
            value={newIgnore}
            onChange={makeAddHandler}
            onBlur={makeAddHandler}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Root;
