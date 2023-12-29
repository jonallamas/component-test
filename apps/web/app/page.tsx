'use client';

import { Button, Flex, Divider } from '@repo/ui';

export default function Page(): JSX.Element {
  return (
    <>
      <Flex gap={4}>
        <Button size='small' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' variant='bezeled' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' variant='bezeledGray' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' variant='borderless' onClick={() => alert('hola')}>
          Button
        </Button>
      </Flex>
      <Divider y={32} />
      <Flex gap={4}>
        <Button size='small' color='secondary' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' color='secondary' variant='bezeled' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' color='secondary' variant='bezeledGray' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button size='small' color='secondary' variant='borderless' onClick={() => alert('hola')}>
          Button
        </Button>
      </Flex>
      <Divider y={32} />
      <Flex gap={4}>
        <Button onClick={() => alert('hola')}>Button</Button>
        <Button variant='bezeled' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button variant='bezeledGray' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button variant='borderless' onClick={() => alert('hola')}>
          Button
        </Button>
      </Flex>
      <Divider y={32} />
      <Flex gap={4}>
        <Button color='secondary' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button color='secondary' variant='bezeled' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button color='secondary' variant='bezeledGray' onClick={() => alert('hola')}>
          Button
        </Button>
        <Button color='secondary' variant='borderless' onClick={() => alert('hola')}>
          Button
        </Button>
      </Flex>
      <Divider y={32} />
      <Flex gap={4}>
        <div>
          <Button color='primary' variant='bezeled' onClick={() => alert('hola')}>
            Icon
          </Button>
        </div>
        <div>
          <Button color='secondary' variant='bezeled' onClick={() => alert('hola')}>
            Icon
          </Button>
        </div>
        <div>
          <Button color='error' variant='bezeled' onClick={() => alert('hola')}>
            Icon
          </Button>
        </div>
      </Flex>
    </>
  );
}
