import React from 'react'
import { Routes as Switch, Route, Navigate } from 'react-router-dom'

import Results from './Results'

const Routes = () => {
  return (
    <div className='p-4'>
        <Switch>
            <Route path='/' element={<Navigate to='/search' replace />}/>
            {['/search', '/image', '/news', '/videos'].map(path => (
                <Route 
                    key="search"
                    path={path}
                    element={<Results/>}
                />
            ))}
        </Switch>
    </div>
  )
}

export default Routes