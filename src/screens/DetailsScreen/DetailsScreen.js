import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import * as queries from '../../graphql/queries';
import { API } from 'aws-amplify';
import { fecha } from '../../../utils/day';

const DetailsScreen = ({ itemId }) => {
  const [data, setData] = useState({});

  const fetchDocument = async (itemId) => {
    try {
      const oneDocument = await API.graphql({
        query: queries.getInformationDocuments,
        variables: { id: itemId },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      if (oneDocument.data.getInformationDocuments) {
        setData(oneDocument.data.getInformationDocuments);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDocument(itemId);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Detalle</Text>
        <View style={styles.dataDocuments}>
          <View>
            <Text style={styles.tileDocument}>{data.title}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Telefonos</Text>
              <Text style={styles.detailsData}>{data.cellPhone}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Direccion</Text>
              <Text style={styles.detailsData}>{data.address}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Modalidad</Text>
              <Text style={styles.detailsData}>{data.modality}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Correo Electronico</Text>
              <Text style={styles.detailsData}>{data.email}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Municipios-Departamento</Text>
              <Text style={styles.detailsData}>
                {data.municipalitiesDepartments}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#f5f5f5',
              borderBottomWidth: 1,
              margin: 15,
            }}
          />
          <View style={styles.row}>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Minerales</Text>
              <Text style={styles.detailsData}>{data.minerals}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Codigo RMN</Text>
              <Text style={styles.detailsData}>{data.codeRMN}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Codigo expediente</Text>
              <Text style={styles.detailsData}>{data.codeFile}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Fecha registro</Text>
              <Text style={styles.detailsData}>{data.dateRegistration}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Fecha terminar</Text>
              <Text style={styles.detailsData}>{data.dateEnds}</Text>
            </View>

            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Grupo trabajo</Text>
              <Text style={styles.detailsData}>{data.groupWork}</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.titleDetails}>Estado expediente</Text>
              <Text style={styles.detailsData}>
                {data.dateEnds === fecha || data.dateEnds < fecha
                  ? 'Titulo vigente - En ejecucion '
                  : 'Titulo vencido'}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.titleDocuments}>Documentos</Text>
        <View style={styles.documentsFails}>
          <View style={styles.documentImage1(true, false, false)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
          <View style={styles.documentImage1(false, false, true)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
          <View style={styles.documentImage1(false, false, false)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
          <View style={styles.documentImage1(false, false, true)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
          <View style={styles.documentImage1(false, true, false)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
          <View style={styles.documentImage1(false, true, false)}>
            <Image source={require('../../img/pdf1.png')} style={styles.img} />
            <Text style={styles.urlImg}>
              resolucion-754-del-26-de-noviembre-2021.pdf
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
  },
  dataDocuments: {
    backgroundColor: 'white',
    marginRight: 25,
    marginLeft: 25,
  },
  documentsFails: {
    backgroundColor: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 200,
  },
  title: {
    borderTopRightRadius: 12,
    textAlign: 'center',
    marginTop: 50,
    color: '#BC1C06',
    width: '20%',
    backgroundColor: 'white',
    marginLeft: 25,
  },
  titleDocuments: {
    backgroundColor: '#D8D8D8',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 15,
    color: 'white',
  },
  tileDocument: {
    margin: 15,
    color: '#A4A4A4',
    backgroundColor: '#E6E6E6',
    padding: 15,
    fontSize: 12,
  },
  titleDetails: {
    color: '#BC1C06',
    paddingLeft: 15,
    marginBottom: 5,
    fontSize: 10,
  },
  row: {
    flex: 1,
  },
  dataContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsData: {
    color: '#707070',
    fontSize: 10,
    width: '50%',
    paddingRight: 15,
    marginBottom: 5,
    marginBottom: 5,
  },
  documentImage1: (primary, ultimate, tercario) => ({
    flex: 1,
    flexDirection: 'row',
    marginTop: primary ? 15 : 0,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: tercario ? '#fff' : '#e6e1e1',
    padding: 5,
    marginBottom: ultimate ? 15 : 0,
  }),
  img: {
    flex: 1,
    width: 50,
    height: 50,
    margin: 5,
  },
  urlImg: {
    margin: 5,
    marginRight: 15,
    padding: 5,
    color: '#000',
    fontSize: 10,
    width: '75%',
    overflow: 'hidden',
  },
});
