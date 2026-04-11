# Integración de Formspree en el formulario de contacto

## Descripción
En este proyecto se utilizó **Formspree** para habilitar el envío de mensajes desde un formulario HTML sin necesidad de desarrollar un backend propio ni configurar un servidor.

Formspree actúa como intermediario: recibe los datos del formulario y los envía al correo electrónico configurado en la plataforma.

---

## Implementación en el proyecto
Para integrar Formspree se creó un formulario dentro de la plataforma, que genera una URL única.  
Esa URL se colocó en el atributo `action` del formulario HTML, utilizando el método `POST`.