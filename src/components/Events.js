import React from 'react';
import {
  Container,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
  Button
} from 'reactstrap';

import { Link } from 'react-router-dom';
import FavoriteEvents from './FavoriteEvents';
import EventsModal from './EventsModal';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Container className="formpadding">
        <h2>Find Fitness Events!</h2>
        <h5>Search for events in your area</h5>

        <FormGroup className="ml-2">
          <Row>
            <Col className="col-md-3">
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </Col>
          </Row>
        </FormGroup>

        <Link to="/events/results">
          <Button className="btn btn-primary mt-2 ml-2" type="submit">
            Go!
          </Button>
        </Link>

        
        <Route exact path="/events/results" component={EventsModal} />
        <Route exact path="/events/saved" component={FavoriteEvents} />
      </Container>
    </Router>
  );
};
