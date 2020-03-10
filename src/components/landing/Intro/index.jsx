import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details } from './styles'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const ParticlesContainer = styled.div`
    position: absolute;
    width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	margin-top: 4em;
`;

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Jennifer Huynh</h1>
				<h2>Final year software engineering student.</h2>
				{/*<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>*/}
			</Details>
			<ParticlesContainer>
            	<Particles 
				width="100%"
				height="100%" 
				params={{
					"particles": {
					"number": {
						"value": 100,
						"density": {
						"enable": true,
						"value_area": 900
						}
					},
					"color": {
						"value": "#FFFFFF"
					},
					"shape": {
						"type": "circle",
						"stroke": {
						"width": 0,
						"color": "#000000"
						},
						"polygon": {
						"nb_sides": 5
						},
						"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
						}
					},
					"opacity": {
						"value": 0.6,
						"random": true,
						"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
						}
					},
					"line_linked": {
						"enable": false,
						"distance": 120,
						"color": "#FFFFFF",
						"opacity": 0.4,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 5,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
						}
					}
					},
					"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
						"enable": true,
						"mode": "repulse"
						},
						"onclick": {
						"enable": true,
						"mode": "push"
						},
						"resize": false
					},
					"modes": {
						"grab": {
						"distance": 400,
						"line_linked": {
							"opacity": 1
						}
						},
						"bubble": {
						"distance": 400,
						"size": 40,
						"duration": 2,
						"opacity": 8,
						"speed": 3
						},
						"repulse": {
						"distance": 50,
						"duration": 0.4
						},
						"push": {
						"particles_nb": 4
						},
						"remove": {
						"particles_nb": 2
						}
					}
					},
					"retina_detect": true
				}}
            	/>          
        	</ParticlesContainer>
		</IntroWrapper>
	</Wrapper>
)
