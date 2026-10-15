import { LegalLayout, LegalSection } from '../components/LegalLayout'

export function PrivacyPage() {
  return (
    <LegalLayout title="Política de Privacidad" subtitle="Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013" date="20 de mayo de 2026">
      <LegalSection title="1. Responsable del tratamiento">
        <p><strong className="text-text-primary">Trive Technologies SAS</strong></p>
        <p>Ciudad: Cali, Colombia</p>
        <p>Correo: privacy@trivesoft.com</p>
      </LegalSection>

      <LegalSection title="2. Datos personales que recopilamos">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong className="text-text-primary">Datos de identificación:</strong> nombre completo, número de teléfono celular, correo electrónico.</li>
          <li><strong className="text-text-primary">Datos del vehículo (conductores):</strong> marca, modelo, color, placa y fotografía del vehículo.</li>
          <li><strong className="text-text-primary">Datos de ubicación:</strong> coordenadas GPS durante el uso de la Plataforma, para facilitar la conexión entre conductor y pasajero.</li>
          <li><strong className="text-text-primary">Datos de uso:</strong> historial de trayectos, calificaciones, reseñas y mensajes internos en la Plataforma.</li>
          <li><strong className="text-text-primary">Datos técnicos:</strong> token del dispositivo para notificaciones push, sistema operativo y versión de la aplicación.</li>
          <li><strong className="text-text-primary">Fotografía de perfil:</strong> de forma opcional, cargada por el usuario.</li>
          <li><strong className="text-text-primary">Datos del programa de referidos (conductores):</strong> código de referido generado por la Plataforma para cada conductor activo y, en caso de aplicar, el código del conductor que lo refirió. Estos datos se utilizan exclusivamente para calcular y acreditar los beneficios del programa de referidos.</li>
          <li><strong className="text-text-primary">Datos de solicitudes de viaje al aeropuerto (pasajeros):</strong> origen del recorrido, aeropuerto de destino, fecha y hora de vuelo, número de pasajeros, precio ofrecido y notas opcionales. Estos datos son visibles para los conductores verificados de la Plataforma con el fin de facilitar la aceptación del viaje.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidades del tratamiento">
        <p>Tus datos personales serán tratados para:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Crear y gestionar tu cuenta de usuario.</li>
          <li>Facilitar la conexión entre conductores y pasajeros.</li>
          <li>Mostrar tu ubicación aproximada para la planificación del trayecto.</li>
          <li>Enviarte notificaciones relacionadas con el servicio.</li>
          <li>Verificar la identidad de los conductores mediante revisión de documentos.</li>
          <li>Calcular calificaciones y reputación de usuarios.</li>
          <li>Gestionar el programa de referidos entre conductores y acreditar los beneficios correspondientes.</li>
          <li>Conectar pasajeros con conductores para solicitudes de viaje al aeropuerto, mostrando la información de la solicitud a conductores verificados.</li>
          <li>Mejorar la Plataforma mediante análisis estadísticos anonimizados.</li>
          <li>Cumplir obligaciones legales vigentes.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base legal del tratamiento">
        <p>El tratamiento de tus datos se realiza con base en:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Tu <strong className="text-text-primary">consentimiento expreso</strong> otorgado al momento del registro (Art. 9, Ley 1581 de 2012).</li>
          <li>La ejecución del acuerdo de uso de la Plataforma.</li>
          <li>El cumplimiento de obligaciones legales.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Derechos del titular">
        <p>De conformidad con el artículo 8 de la Ley 1581 de 2012, tienes derecho a:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong className="text-text-primary">Conocer</strong> los datos personales que Trive tiene sobre ti.</li>
          <li><strong className="text-text-primary">Actualizar</strong> tus datos cuando sean inexactos o incompletos.</li>
          <li><strong className="text-text-primary">Suprimir</strong> tus datos cuando no sean necesarios para las finalidades declaradas.</li>
          <li><strong className="text-text-primary">Revocar</strong> la autorización otorgada para el tratamiento.</li>
          <li><strong className="text-text-primary">Acceder</strong> gratuitamente a tus datos personales.</li>
          <li><strong className="text-text-primary">Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC).</li>
        </ul>
        <p className="mt-3">Para ejercer estos derechos escríbenos a <strong className="text-text-primary">privacy@trivesoft.com</strong>. Responderemos dentro de los <strong className="text-text-primary">10 días hábiles</strong> siguientes a la recepción de tu solicitud, conforme al artículo 14 de la Ley 1581 de 2012.</p>
      </LegalSection>

      <LegalSection title="6. Transferencia de datos a terceros">
        <p>Trive utiliza los siguientes proveedores tecnológicos que pueden acceder a tus datos como encargados del tratamiento:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li><strong className="text-text-primary">Supabase Inc.</strong> — infraestructura de base de datos y autenticación. Servidores en Estados Unidos, bajo acuerdos de protección de datos compatibles con estándares internacionales.</li>
          <li><strong className="text-text-primary">Expo (Expo Inc.)</strong> — envío de notificaciones push.</li>
        </ul>
        <p className="mt-3">No vendemos, arrendamos ni cedemos tus datos a terceros con fines comerciales.</p>
      </LegalSection>

      <LegalSection title="7. Seguridad de los datos">
        <p>Trive implementa las siguientes medidas de seguridad:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Cifrado de datos en tránsito mediante HTTPS/TLS.</li>
          <li>Autenticación segura mediante OTP y tokens de sesión.</li>
          <li>Acceso restringido a datos personales según rol de usuario.</li>
          <li>Políticas de seguridad internas para el equipo de Trive.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Retención de datos">
        Tus datos se conservarán mientras tu cuenta esté activa. Al eliminar tu cuenta, tus datos serán suprimidos en un plazo máximo de <strong className="text-text-primary">30 días calendario</strong>, salvo obligación legal de conservarlos por un período mayor.
      </LegalSection>

      <LegalSection title="9. Menores de edad">
        La Plataforma no está dirigida a personas menores de 18 años. Si identificamos que un usuario menor de edad ha creado una cuenta, procederemos a eliminarla de inmediato.
      </LegalSection>

      <LegalSection title="10. Modificaciones">
        Trive podrá modificar esta Política en cualquier momento, notificando los cambios a través de la Plataforma. El uso continuado tras la notificación implica la aceptación de la nueva política.
      </LegalSection>

      <div className="rounded-2xl bg-trive-tint px-5 py-4 text-sm leading-relaxed text-text-secondary">
        Si consideras que tu derecho a la protección de datos ha sido vulnerado, puedes presentar una queja ante la{' '}
        <a href="https://www.sic.gov.co" target="_blank" rel="noreferrer" className="font-bold text-trive-primary">
          Superintendencia de Industria y Comercio (SIC) — www.sic.gov.co
        </a>
        .
      </div>
    </LegalLayout>
  )
}
