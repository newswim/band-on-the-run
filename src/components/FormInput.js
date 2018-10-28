import React, { useState } from 'react';

export default function FormInput() {
  let [name, setName] = useState('Bob')
  return <input value={name} onChange={e => setName(e.target.value)} />
};
