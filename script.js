function reload(){
    location.reload()
}

function Close(){ 

   window.alert(" Ação indisponivel no momento . ")

}

function Change(){

const CarouselGTA = document.getElementById('NextCard')

const Text = document.getElementById('TituloPag')

const ContGamer = document.getElementById('ContainerGamer')

const ContReal = document.getElementById('ContainerReal')

const Header = document.getElementById('headerInc')

const Background = document.getElementById('backChange')

const Container = document.getElementById('C02')

const CarouselReal = document.getElementById('ProCard')

const TitleGTA = document.getElementById('TitleGTA')

const TitleReal = document.getElementById('TitleReal')

const textGTA = document.getElementById('TextGTA')

const TextReal = document.getElementById('TextReal')

const ImgReal = document.getElementById('ImgReal')

const ImgGTA = document.getElementById('ImgGTA')


CarouselGTA.style.display = 'none'
CarouselReal.style.display = 'block'
CarouselReal.style.width = '100%'
CarouselReal.style.height = '100%'
CarouselReal.style.textAlign = 'center'
CarouselReal.style.boxShadow = '0.3rem 0.3rem 1rem green'
CarouselReal.style.margin = '0.5rem auto'
CarouselReal.style.backgroundSize = 'cover'



Background.style.backgroundImage = 'url("imagens/miami-night.jpg")'
Background.style.backgroundPosition = 'center'
Background.style.backgroundSize = 'cover'



Container.style.textAlign = 'center'
Container.style.margin = 'auto'
Container.style.textAlign = 'center'
Container.style.width = '100%'
Container.style.height = 'auto'
Container.style.backgroundSize = 'cover'


Header.style.backgroundImage = 'linear-gradient(black,blue)'

Text.style.textDecorationColor = 'purple'



ContGamer.style.display = 'none'
ContReal.style.display = 'flex'
ContReal.style.backgroundImage = 'url("imagens/background-Neom.jpeg")'
ContReal.style.backgroundSize = 'cover'

TitleGTA.style.display = 'none'
TitleReal.style.display = 'flex'

textGTA.style.display = 'none'
TextReal.style.display = 'flex'

ImgGTA.style.display = 'none'
ImgReal.style.display = 'flex'




}


