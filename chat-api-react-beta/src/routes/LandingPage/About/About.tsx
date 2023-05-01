import React from 'react'
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import './About.css'

export default function About() {
    return (
        <div className="about-section">
          <Card css={{ mw: "600px" }}>
            <Card.Header>
              <Text b>Let's chat about your Hinge profile!</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  How to?
                </Button>
                <Button size="sm" color="secondary">
                  Chat Now!
                </Button>
              </Row>
            </Card.Footer>
          </Card>
        </div>
    )
}
