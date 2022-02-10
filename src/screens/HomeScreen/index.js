import React, {useState, useEffect} from 'react';
import {API, Auth} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ListDocuments} from './ListDocuments';
import {
  SendEmail,
  SendSMS,
  SendVoice,
  SendWhatsapp,
} from '../../components/axios';
import {fecha} from '../../../utils/day';

const expiredDocuments = [];

const index = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [send, setSend] = useState(0);
  const [sendError, setSendError] = useState(0);

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  const fetchProducts = async () => {
    try {
      const documents = await API.graphql({
        query: queries.listDocuments,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      if (documents.data.listDocuments) {
        setData(documents.data.listDocuments.items);
        documents.data.listDocuments.items.map(item => {
          if (item.expirationData == fecha || item.expirationData > fecha) {
            SendWhatsapp({
              to: '+573165580810',
              body: 'Html',
            })
              .then(e => {
                setSend(+1);
              })
              .catch(error => {
                setSendError(+1);
                console.log('ok Whatsapp');
              });
            SendSMS({
              to: '+573165580810',
              body: 'Html',
            })
              .then(e => {
                setSend(+1);
              })
              .catch(error => {
                setSendError(+1);
                console.log('ok SMS');
              });
            SendEmail({
              email: 'jszorrilla4@misena.edu.co',
              DocumentId: parseInt(item.content),
              NameDocument: item.title,
              html: 'Juan',
            })
              .then(e => {
                setSend(+1);
              })
              .catch(error => {
                setSendError(+1);
                console.log('ok Email');
              });
            SendVoice({
              to: '+573165580810',
            })
              .then(e => {
                setSend(+1);
              })
              .catch(error => {
                setSendError;
                console.log('ok Voice');
              });
            expiredDocuments.push(item.title);
          }
        });
      }
    } catch (e) {
      console.log('nada');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };
  return (
    <>
      <LinearGradient
        colors={['#8C1C06', '#8C1C06', '#8C1C06']}
        style={styles.body}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 24,
              alignSelf: 'center',
              color: 'white',
              fontSize: 30,
              padding: 90,
            }}>
            Titulos mineros
            <Text
              style={{
                fontSize: 11,
                alignSelf: 'center',
                color: 'white',
                fontSize: 30,
                padding: 90,
              }}>
              Se han enviado {send} notifaciones {'\n'}
              No se han podido enviar {sendError} notifaciones
            </Text>
          </Text>
          <Text
            onPress={signOut}
            style={{
              width: '100%',
              textAlign: 'center',
              color: 'red',
              marginTop: 'auto',
              marginVertical: 20,
              fontSize: 20,
            }}>
            Cerrar sesión
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.containerData}>
        {data && (
          <ListDocuments
            productList={data}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: 400,
    height: 300,
    borderTopRadius: 20,
  },
  containerData: {
    backgroundColor: 'white',
    width: 400,
    height: 600,
    borderRadius: 20,
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
  },
  row: {
    flex: 1,
  },
});

export default index;
