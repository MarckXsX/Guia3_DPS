import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const users = [
{
  name: 'Pupusas',
  avatar: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg',
  descrip: 'Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.'
},
{
  name: 'thot leader',
  avatar:
    'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
},
{
  name: 'jsa',
  avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
},
{
  name: 'talhaconcepts',
  avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
},
{
  name: 'andy vitale',
  avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
},
{
  name: 'katy friedson',
  avatar:
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
},
];

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
return (
  <>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>Pususas</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Mas Informacion."
          />
        </Card>

        <Card>
          <Card.Title>Tamales</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://tipsparatuviaje.com/wp-content/uploads/2020/02/tamales-comida.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural. 
          Antes de cocinar en agua hirviendo se envuelven en hojas de plátano.</Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Mas Informacion."
          />
        </Card>

        <Card>
          <Card.Title>Sopa de pata</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://tipsparatuviaje.com/wp-content/uploads/2020/02/sopa-de-pata.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Sopa cuyo ingrediente base son las extremidades de la vaca, a las que se les agregan verduras como 
          plátano, repollo, yuca, pipianes, ejotes y güisquil.</Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Mas Informacion."
          />
        </Card>

        <Card>
          <Card.Title>Atol</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://tipsparatuviaje.com/wp-content/uploads/2020/02/atol-bebida.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco, 
          uno elaborado a partir de maíz fermentado, agua y alhuashte, polvo obtenido al moler las semillas de ayote.</Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Mas Informacion."
          />
        </Card>

      </View>
    </ScrollView>
  </>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
descrip: {
  fontSize: 16,
  marginTop: 5,
}
});

export default Cards;