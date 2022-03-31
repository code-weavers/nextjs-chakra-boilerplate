import { NextPage } from 'next';
import { Box, Flex, Button } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

const Water: NextPage = () => {
  const [active, setActive] = useState(false);

  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  const [cupHeight, setCupHeight] = useState(0);

  const [fillingAmount, setFillingAmount] = useState(10);

  const [fillingRate, setFillingRate] = useState(300);

  const stopFillingCup = useCallback(() => {
    clearInterval(intervalId);
  }, [intervalId]);

  useEffect(() => {
    if (cupHeight === 100) {
      stopFillingCup();
    }
    console.log(cupHeight);
  }, [cupHeight, stopFillingCup]);

  const fillCup = useCallback(() => {
    const intervalId = setInterval(() => {
      setCupHeight((value) => value + fillingAmount);
    }, fillingRate);
    setIntervalId(intervalId);
  }, [setCupHeight, fillingAmount, setIntervalId, fillingRate]);

  const clearCup = useCallback(() => {
    setCupHeight(0);
  }, [setCupHeight]);

  const toggleActive = useCallback(() => {
    setActive((value) => !value);

    console.log(active);
    if (!active) {
      fillCup();
    } else {
      stopFillingCup();
    }
  }, [setActive, fillCup, active, stopFillingCup]);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} p={10} flexDir={'column'}>
      <Flex>
        <Button mr={4} mb={4} w={'fit-content'} onClick={toggleActive}>
          {active ? 'Parar' : 'Encher'}
        </Button>

        <Button onClick={clearCup}>Esvaziar</Button>
      </Flex>

      <Flex>
        <Box
          position={'relative'}
          _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            transition: 'all 1.5s',
            width: '100%',
            backgroundColor: 'blue',
            height: `${cupHeight}%`,
          }}
          borderLeft={'1px'}
          borderRight={'1px'}
          w={200}
          h={600}
          borderBottom={'1px'}
          borderColor={'black'}
          borderStyle={'solid'}
        />
      </Flex>
    </Flex>
  );
};

export default Water;
