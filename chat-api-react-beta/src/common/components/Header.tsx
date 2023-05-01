import React from 'react'
import { Text } from "@nextui-org/react";
import { Grid, Switch } from "@nextui-org/react";
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';
import './Header.css'

export default function Header() {
    return (
        <>
        <div className="header">
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Ask
          </Text>
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            Chat GPT
          </Text>
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            to help 
          </Text>
          <Grid>
            <Switch
              checked={true}
              size="xl"
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
              color="secondary"
            />
          </Grid>
          </div>
        </>
    )
}
