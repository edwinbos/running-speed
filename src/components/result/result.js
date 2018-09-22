import React from 'react'

import './result.css'

const Result = ({ result }) => (
  <div class="result">
      <div class="result__inner">
        {result} km/u
    </div>
  </div>
)

export default Result
