import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Tips from './pages/Tips';
import SpecialtyPage from './pages/SpecialtyPage';
import { CLINIC_NAME } from './constants';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/conseils" element={<Tips />} />

            {/* Specialties */}
            <Route
              path="/soins-conservateurs"
              element={
                <SpecialtyPage
                  title="Soins conservateurs"
                  image="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p className="font-bold text-zinc-900 text-xl">Dentisterie restauratrice</p>
                      <p>À {CLINIC_NAME}, nous privilégions la préservation des dents naturelles grâce à des traitements de dentisterie restauratrice précis et peu invasifs. Lorsqu’une carie est détectée, les tissus infectés sont soigneusement retirés, puis remplacés par un biomatériau de haute qualité.</p>
                      <p className="font-bold text-zinc-900 text-xl">Endodontie (traitement des racines)</p>
                      <p>L’endodontie vise à éliminer ces infections en nettoyant et en scellant les canaux radiculaires afin de sauver la dent. Le Dr Hicham Marzak pratique ces soins avec des équipements de dernière génération.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/prothese-dentaire"
              element={
                <SpecialtyPage
                  title="Prothèse dentaire"
                  image="https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>Les prothèses dentaires permettent de remplacer les dents manquantes tout en retrouvant un confort optimal et un sourire naturel. À {CLINIC_NAME}, chaque prothèse est fabriquée sur mesure pour s’intégrer parfaitement à votre morphologie.</p>
                      <p>Qu’elle soit fixe (couronne, bridge, implant) ou amovible, la solution est choisie selon vos besoins fonctionnels et esthétiques.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/parodontie"
              element={
                <SpecialtyPage
                  title="Parodontie"
                  image="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>Les soins des gencives sont essentiels pour maintenir la stabilité et la santé de vos dents. Les maladies parodontales peuvent entraîner des inflammations et, à terme, la perte de dents.</p>
                      <p>À {CLINIC_NAME}, nous proposons des traitements complets : détartrage en profondeur, curetage, surfaçage et entretien régulier.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/dentisterie-pediatrique"
              element={
                <SpecialtyPage
                  title="Dentisterie pédiatrique"
                  image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>Les enfants nécessitent une attention particulière. Chez {CLINIC_NAME}, nous accueillons les plus jeunes dans un cadre rassurant. Notre mission est de prévenir les caries et enseigner les bons gestes dès le plus jeune âge.</p>
                      <p>Nous proposons des soins adaptés : fluoration, scellement des sillons et traitements précoces.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/orthodontie"
              element={
                <SpecialtyPage
                  title="Orthodontie"
                  image="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>L'orthodontie permet d'aligner vos dents pour un sourire harmonieux et une meilleure fonction masticatoire. Nous proposons des solutions modernes pour enfants et adultes.</p>
                      <p>Grâce aux bagues classiques ou aux aligneurs invisibles, nous corrigeons les malpositions dentaires avec précision.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/esthetique-dentaire"
              element={
                <SpecialtyPage
                  title="Esthétique dentaire"
                  image="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>Un sourire lumineux est synonyme de confiance. Chez {CLINIC_NAME}, nous proposons : blanchiment professionnel, facettes, couronnes esthétiques et remodelage du sourire.</p>
                      <p>Le Dr Marzak allie précision médicale et sens artistique pour un résultat éclatant et naturel.</p>
                    </>
                  }
                />
              }
            />
            <Route
              path="/implantologie-dentaire"
              element={
                <SpecialtyPage
                  title="Implantologie dentaire"
                  image="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
                  content={
                    <>
                      <p>L’implant dentaire est la solution la plus fiable pour remplacer des dents manquantes. À {CLINIC_NAME}, nous utilisons des implants de dernière génération planifiés en 3D.</p>
                      <p>Le résultat : une dentition solide, un sourire naturel et une qualité de vie retrouvée.</p>
                    </>
                  }
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
