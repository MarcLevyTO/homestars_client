import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { gifService } from '../../_services/gifService';

function GifSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    const { value } = e.target;
    setSearchTerm(value);
  }

  function handleSubmit() {
    gifService.search(searchTerm).then((results) => {
      setSearchResults(results.data)
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit();
  }

  useEffect(() => {
  }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Form name="form" onSubmit={handleFormSubmit}>
        <InputGroup className="mb-3">
          <Form.Control id="searchTerm" onChange={handleChange} value={searchTerm} autoFocus />
          <InputGroup.Append>
            <Button onClick={() => handleSubmit()} variant="outline-primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {
        searchResults && searchResults[0] && (
          <div>
            { searchResults.map((result, index) => (
              <img key={index} src={result} />
            ))}
          </div>
        )
      }
    </div>
  );
}

export { GifSearch };
