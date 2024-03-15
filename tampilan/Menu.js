import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Footer from './Footer';

const CandidateList = [
  {
    id: 1,
    name: 'Kandidat 1',
    buttonId: 'candidate1Button',
  },
  {
    id: 2,
    name: 'Kandidat 2',
    buttonId: 'candidate2Button',
  },
];

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCandidates: [],
      modalVisible: false,
    };
  }
  handleCandidateSelection = (candidateId) => {
    const { selectedCandidates } = this.state;
    if (selectedCandidates.includes(candidateId)) {
      this.setState({ selectedCandidates: [] }); // Deselect candidate if it's already selected
    } else {
      this.setState({ selectedCandidates: [candidateId] }); // Select the new candidate and deselect others
    }
  }

  handleSubmitVote = () => {
    // Do something with the selected candidates
    this.setState({ modalVisible: true });
  }

  handleCloseModal = () => {
    this.setState({ modalVisible: false });
    this.resetState();
  }

  resetState = () => {
    this.setState({ selectedCandidates: [] });
  }
  render() {
    const { selectedCandidates, modalVisible } = this.state;

    return (
      <View style={tampilan.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <ScrollView style={tampilan.scrollview}>
          <View
            style={tampilan.header}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.navigation.pop()}>
              <Icon
                style={{ marginRight: 10 }}
                name="angle-double-left"
                size={25}
                color="#ffffff"
              />
              <Text
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <View>
              <Text style={tampilan.judulpaslon}>Kandidat 1</Text>
              <Image source={require('../Image/paslon1.jpg')}
                style={tampilan.image1}
              />
              <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16 }}>Imam Bari Setiawan</Text>
              <View style={tampilan.menu}>
                <TouchableOpacity style={tampilan.buttonvisimisi} onPress={() => this.props.navigation.navigate('VisiMisi1')}>
                  <Text>Visi dan Misi</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={tampilan.judulpaslon}>Kandidat 2</Text>
              <Image source={require('../Image/paslon2.jpg')}
                style={tampilan.image2}
              />
              <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16 }}>Febrian Adi Prasetyo</Text>
              <View style={tampilan.menu}>
                <TouchableOpacity style={tampilan.buttonvisimisi} onPress={() => this.props.navigation.navigate('VisiMisi2')}>
                  <Text>Visi dan Misi</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={tampilan.menu}>
              <Text style={tampilan.title}>Pilihlah yang terbaik:</Text>
              <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                {CandidateList.map(candidate => (
                  <TouchableOpacity
                    key={candidate.id}
                    style={[tampilan.candidateContainer, selectedCandidates.includes(candidate.id) && tampilan.selectedCandidateContainer]}
                    onPress={() => this.handleCandidateSelection(candidate.id)}
                  >
                    <Text style={[tampilan.candidateName, selectedCandidates.includes(candidate.id) && tampilan.selectedCandidateName]}>
                      {candidate.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                style={tampilan.button}
                onPress={this.handleSubmitVote}
              >
                <Text style={tampilan.buttonText}>Submit</Text>
              </TouchableOpacity>

            </View>
            <Modal // modal untuk menampilkan hasil pemilihan jia sudah berhasil
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={this.handleCloseModal}
            >
              <View style={[tampilan.modalContainer, { maxHeight: 500 }]}>
                <Text style={tampilan.modalTitle}>Berhasil Coblos</Text>
                <Image source={require('../Image/modul_berhasil.jpg')}
                  style={tampilan.imagemodal}
                />
                <Text style={tampilan.modalSubTitle}>Terima kasih telah berpartisipasi!</Text>
                <TouchableOpacity
                  style={tampilan.modalButton}
                  onPress={this.handleCloseModal}
                >
                  <Text style={tampilan.modalButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Menu;

const tampilan = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  scrollview: {
    flex: 1,
  },
  header: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    elevation: 3,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  logoheader: {
    height: 385,
    width: 370,
    alignSelf: 'center',
  },
  judulpaslon: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  image1: {
    marginTop: 10,
    width: 125,
    height: 125,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  image2: {
    marginTop: 10,
    width: 125,
    height: 125,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  menu: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonvisimisi: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  candidateContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  selectedCandidateContainer: {
    backgroundColor: '#0066cc',
  },
  candidateName: {
    fontSize: 16,
  },
  selectedCandidateName: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    paddingVertical: 50,
    borderRadius: 20,
    elevation: 20,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
    elevation: 15,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  imagemodal: {
    width: 125,
    height: 125,
    marginBottom: 10,
    resizeMode: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
});