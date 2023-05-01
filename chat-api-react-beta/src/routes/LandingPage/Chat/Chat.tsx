import React from 'react'
import { Textarea  } from '@nextui-org/react';
import './Chat.css'

export default function Chat() {
    return (
        <div className="text-area">
          <Textarea
            label="Write your thoughts"
            placeholder="Enter your amazing ideas."
            minRows={100}
            size="xl"
            width="50vw"
          />           
        </div>
    )
}
