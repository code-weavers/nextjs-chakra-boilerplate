import { Flex } from '@chakra-ui/react';

enum Product {
  write = 'product:write',
  read = 'product:read',
  destroy = 'product:destroy',
}

enum Order {
  write = 'product:write',
  read = 'product:read',
  destroy = 'product:destroy',
}

interface User {
  permissions: [Product.write, Product.read, Product.destroy];
}

const userCorno = {
  permissions: [],
};
const actions = [
  {
    text: 'Produtos',
  },
  {
    text: 'Users',
    canShow: [Product.read, Order.read],
  },
  {
    text: 'Pedidos',
  },
].filter((item) => Users.permisions.includes(item.canShow));

const admin = ['product:write', 'product:read', 'product:delete', 'order:write', 'order:edit'];

const bartender = ['product:read, order:write, order:read'];

const Dashboard = () => {
  return (
    <Flex flexDir={'column'}>
      <Flex bg={'black'} minH={'10vh'}>
        <Flex justifyItems={'flex-end'}>
          {actions.map((item, index) => (
            <Flex color={'white'} key={index}>
              {item.text}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
