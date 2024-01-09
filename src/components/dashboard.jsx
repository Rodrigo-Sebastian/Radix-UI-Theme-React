import {Flex, Heading, Link, Card, Avatar, Text, TextField,} from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import './overview.css';
import './dashboard.css';
import Cards from "./cards.jsx";

const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];
 

export default function Dashboard(){
    return (
        <section className="Dasboard__section">
            <div className="Headding">
                <div className="top__card__and__links">
                <Card height="1" className="Card">
                    <Flex direction="row" gap="3" align="center" className="Card__info">
                        <Avatar size="1" radius="full" className="Avatar"></Avatar>
                        <Text as="div" size="2" weight="bold"> Alicia Koch</Text>
                    </Flex>
                </Card>
                <div className="Dashboard__links">
                    <Flex direction="row" gap="3" align="center">
                        <Link className="active_link">Overview</Link>
                        <Link>Customers</Link>
                        <Link>Products</Link>
                        <Link>Settings</Link>
                    </Flex>
                </div>
                </div>
                <div className="Dashboard__serch__field">
                    <Flex direction="row" gap="3" align="center">
                        <TextField.Input size="2" placeholder="Search" className="Search__Field"/>
                        <Avatar fallback="A" radius="full">
                        </Avatar>
                    </Flex>
                </div>
            </div>
            <div className="Dasboard__title__info">
                <Heading>Dashboard</Heading>
                <Flex direction="row" gap="5" align="center" justify="center" className="Link__field">
                    <Link className="tag__active__link">Overview</Link>
                    <Link className="">Analytics</Link>
                    <Link className="">Reports</Link>
                    <Link className="">Notfications</Link>
                </Flex>
            </div>
            <div className="cards__container">
                <Cards className="card__div" title="Total Revenue" amount="$45,231.89" info="+20.1% from last month"></Cards>
                <Cards className="card__div" title="Subscription" amount="+2350" info="+180.1% from last month"></Cards>
                <Cards className="card__div" title="Sales" amount="+12,234" info="+19% from last month"></Cards>
                <Cards className="card__div" title="Active Now" amount="+573" info="+201 since last hour"></Cards>
            </div>
            <div className="lower__container">
                <div className="chart__container">
                    <h1 className="chart__title">Overview</h1>
                        <ResponsiveContainer width="100%" height={350} className="overview__container">
                        <BarChart data={data} className="bar">
                            <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            />
                            <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `$${value}`}
                            />
                            <Bar
                            dataKey="total"
                            fill="currentColor"
                            radius={[4, 4, 0, 0]}
                            className="fill-primary"
                            />
                        </BarChart>
                        </ResponsiveContainer>
                </div>
                <div className="recent__sales">
                    <div className="recent__sales__title">
                        <h2>Recent Sales</h2>
                        <p>You made 265 sales this month.</p>
                    </div>
                    <div className="sales__accounts">
                    <Card height="" className="sales__cards">
                        <Flex direction="row" gap="3" align="center" className="sales__flex">
                            <div className="sales__avatar">
                            <Avatar size="1" radius="full" className="Avatar"></Avatar>
                            <div className="sales__avatar__info">
                            <Text as="div" size="2" weight="bold"> Olivia Martin</Text>
                            <Text as="div" size="2" color="gray">olivia.martin@email.com</Text>
                            </div>
                            </div>
                            <div className="">
                                <Text weight="bold">+$1,999.00</Text>
                            </div>
                        </Flex>
                    </Card>
                    <Card height="" className="sales__cards">
                        <Flex direction="row" gap="3" align="center" className="sales__flex">
                            <div className="sales__avatar">
                            <Avatar size="1" radius="full" className="Avatar"></Avatar>
                            <div className="sales__avatar__info">
                            <Text as="div" size="2" weight="bold"> Olivia Martin</Text>
                            <Text as="div" size="2" color="gray">olivia.martin@email.com</Text>
                            </div>
                            </div>
                            <div className="">
                                <Text weight="bold">+$1,999.00</Text>
                            </div>
                        </Flex>
                    </Card>
                    <Card height="" className="sales__cards">
                        <Flex direction="row" gap="3" align="center" className="sales__flex">
                            <div className="sales__avatar">
                            <Avatar size="1" radius="full" className="Avatar"></Avatar>
                            <div className="sales__avatar__info">
                            <Text as="div" size="2" weight="bold"> Olivia Martin</Text>
                            <Text as="div" size="2" color="gray">olivia.martin@email.com</Text>
                            </div>
                            </div>
                            <div className="">
                                <Text weight="bold">+$1,999.00</Text>
                            </div>
                        </Flex>
                    </Card>
                    <Card height="" className="sales__cards">
                        <Flex direction="row" gap="3" align="center" className="sales__flex">
                            <div className="sales__avatar">
                            <Avatar size="1" radius="full" className="Avatar"></Avatar>
                            <div className="sales__avatar__info">
                            <Text as="div" size="2" weight="bold"> Olivia Martin</Text>
                            <Text as="div" size="2" color="gray">olivia.martin@email.com</Text>
                            </div>
                            </div>
                            <div className="">
                                <Text weight="bold">+$1,999.00</Text>
                            </div>
                        </Flex>
                    </Card>
                    <Card height="" className="sales__cards">
                        <Flex direction="row" gap="3" align="center" className="sales__flex">
                            <div className="sales__avatar">
                            <Avatar size="1" radius="full" className="Avatar"></Avatar>
                            <div className="sales__avatar__info">
                            <Text as="div" size="2" weight="bold"> Olivia Martin</Text>
                            <Text as="div" size="2" color="gray">olivia.martin@email.com</Text>
                            </div>
                            </div>
                            <div className="">
                                <Text weight="bold">+$1,999.00</Text>
                            </div>
                        </Flex>
                    </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}