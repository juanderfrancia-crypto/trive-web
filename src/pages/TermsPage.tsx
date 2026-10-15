import { LegalLayout, LegalSection } from '../components/LegalLayout'

export function TermsPage() {
  return (
    <LegalLayout title="Términos de Uso" date="6 de octubre de 2026">
      <LegalSection title="1. Aceptación de los términos">
        Al descargar, instalar o utilizar la aplicación Trive, declaras haber leído, entendido y aceptado estos Términos de Uso en su totalidad. Si no estás de acuerdo con alguno de estos términos, debes abstenerte de utilizar la Plataforma.
      </LegalSection>

      <LegalSection title="2. Naturaleza del servicio">
        <p>Trive Technologies SAS opera exclusivamente como una plataforma tecnológica de intermediación que facilita la conexión entre particulares que deseen compartir un vehículo y los costos de un trayecto.</p>
        <p className="mt-3">Trive no es una empresa de transporte público, privado colectivo ni individual, ni presta servicios de taxi o similares. Las rutas publicadas corresponden a viajes que los conductores ya tienen planeado realizar, en los cuales ofrecen puestos disponibles a otros usuarios para compartir gastos de desplazamiento.</p>
        <p className="mt-3">Las rutas personalizadas (aeropuerto o particulares) son solicitudes de trayecto publicadas por pasajeros y aceptadas por conductores. Trive no fija el precio de estos trayectos, no participa en su ejecución y no es parte del acuerdo entre pasajero y conductor.</p>
      </LegalSection>

      <LegalSection title="3. Requisitos para el uso">
        <p>Para utilizar Trive debes:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Ser mayor de 18 años.</li>
          <li>Proporcionar información veraz, completa y actualizada.</li>
          <li>Contar con un número de teléfono celular activo en Colombia.</li>
          <li>Aceptar el tratamiento de tus datos conforme a nuestra Política de Privacidad.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Registro y cuenta">
        Eres responsable de mantener la confidencialidad de tu cuenta y de todas las actividades realizadas desde ella. Debes notificarnos de inmediato ante cualquier uso no autorizado escribiendo a privacy@trivesoft.com.
      </LegalSection>

      <LegalSection title="5. Conductores">
        <p>Los usuarios que publiquen rutas deben:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Poseer licencia de conducción vigente y válida en Colombia.</li>
          <li>Ser propietarios del vehículo o contar con autorización expresa para conducirlo.</li>
          <li>Mantener documentos del vehículo al día: SOAT y revisión técnico-mecánica vigentes.</li>
          <li>Publicar únicamente trayectos que efectivamente vayan a realizar.</li>
          <li>Ser aprobado por Trive, que verifica la identidad del conductor y el estado de su vehículo antes de habilitarle la publicación. Trive puede retirar esta habilitación si los documentos vencen o si el conductor incumple estos términos.</li>
          <li>Contar con saldo suficiente en su billetera de Trive antes de publicar. Cada publicación de ruta descuenta automáticamente $2.000 del saldo disponible; si el saldo es insuficiente, la publicación no se procesará.</li>
          <li>No cobrar un valor superior al de los gastos reales del trayecto (combustible, peajes y desgaste del vehículo). Trive es una plataforma de compartición de gastos, no de lucro por transporte.</li>
        </ul>
        <p className="mt-3"><strong className="text-text-primary">Rutas personalizadas:</strong> los conductores aprobados pueden aceptar solicitudes de ruta al aeropuerto o particulares publicadas por pasajeros. Al aceptar una solicitud, o una oferta de precio sobre ella, se descuentan automáticamente $5.000 de la billetera del conductor como costo de uso de la Plataforma para esta modalidad. Si el saldo es insuficiente, el conductor no podrá aceptar hasta recargar su billetera. El precio del trayecto lo acuerdan directamente pasajero y conductor.</p>
      </LegalSection>

      <LegalSection title="6. Pasajeros">
        <p>Los usuarios que reserven puestos deben:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Presentarse puntualmente en el punto de encuentro acordado.</li>
          <li>Tratar al conductor y demás pasajeros con respeto.</li>
          <li>Respetar las normas de convivencia durante el trayecto.</li>
          <li>Reportar cualquier incidente a través de los canales oficiales de Trive.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Tarifas y pagos">
        <p>El precio de cada ruta lo fija el conductor y el pago se acuerda y realiza directamente entre conductor y pasajero (efectivo, Nequi, Daviplata u otros). Trive no intermedia ni retiene ese dinero, y no garantiza devoluciones de pagos hechos entre usuarios.</p>
        <p className="mt-3"><strong className="text-text-primary">Saldo de la billetera:</strong> Trive cobra únicamente los $2.000 por publicar una ruta y los $5.000 por aceptar una ruta personalizada. Ambos se descuentan del saldo del conductor. El saldo se recarga mediante los medios de pago habilitados en la aplicación.</p>
        <p className="mt-3">El saldo es de uso exclusivo dentro de Trive. <strong className="text-text-primary">No es retirable, no se transfiere a terceros y no se convierte en dinero en efectivo.</strong> Las recargas no son reembolsables. Esta regla aplica también si la cuenta se cierra: el saldo que quede se pierde al cierre, salvo los casos de error de la aplicación descritos en la sección 8.</p>
        <p className="mt-3"><strong className="text-text-primary">Referidos:</strong> cuando un conductor nuevo se registra con el código de otro conductor y completa y confirma su primera reserva, el conductor que refirió recibe $2.000 de crédito en su saldo y el conductor nuevo recibe $1.000 de crédito. Este beneficio aplica una sola vez por conductor nuevo y se otorga solo si Trive confirma la reserva.</p>
      </LegalSection>

      <LegalSection title="8. Cancelaciones y reembolsos">
        <p><strong className="text-text-primary">Publicación de ruta ($2.000):</strong></p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Se devuelven automáticamente al saldo si el conductor cancela antes de pulsar "Salir" y la ruta no tiene reservas confirmadas. Máximo tres devoluciones automáticas por conductor al día.</li>
          <li>No se devuelven si hay reservas confirmadas, si el conductor pulsa "Salir", o si pasa la hora de salida sin que el conductor pulse "Salir". En ese caso la ruta se cierra y los pasajeros reservados son avisados.</li>
          <li>Se devuelven si hubo un error de la aplicación, como un cobro duplicado.</li>
        </ul>
        <p className="mt-3"><strong className="text-text-primary">Ruta personalizada aceptada ($5.000):</strong></p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Si el pasajero cancela antes del inicio del viaje, los $5.000 se devuelven al saldo del conductor.</li>
          <li>Si el conductor cancela, o el viaje se realiza, no hay devolución.</li>
          <li>Si hubo un error de la aplicación, se devuelve el monto cobrado.</li>
        </ul>
        <p className="mt-3">En casos de emergencia documentada, Trive puede revisar y aprobar una devolución adicional, dejando constancia del motivo.</p>
        <p className="mt-3">Conductores y pasajeros pueden cancelar antes del inicio del trayecto. Trive puede limitar o suspender el uso de la Plataforma por cancelaciones reiteradas. Estas reglas no limitan los derechos reconocidos a los consumidores por la Ley 1480 de 2011.</p>
      </LegalSection>

      <LegalSection title="8A. Cierre de cuenta">
        Puedes cerrar tu cuenta desde Configuración, en Seguridad y privacidad. Al cerrarla, tus datos personales se eliminan o anonimizan, tus reservas y rutas pendientes se cancelan y el acceso queda bloqueado. Los registros de movimientos del saldo se conservan por obligación legal y contable, sin datos personales. El saldo que tengas al cerrar la cuenta no se devuelve, por lo que te recomendamos usarlo antes de cerrarla.
      </LegalSection>

      <LegalSection title="9. Conducta prohibida">
        <p>Está terminantemente prohibido:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Utilizar la Plataforma para ofrecer servicio de taxi o de transporte público, o para ofrecer trayectos de forma habitual como actividad de transporte.</li>
          <li>Publicar información falsa o engañosa.</li>
          <li>Discriminar a otros usuarios por razón de raza, sexo, religión, orientación sexual u otra condición.</li>
          <li>Realizar actividades ilícitas durante los trayectos.</li>
          <li>Acosar, amenazar o agredir a otros usuarios.</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Limitación de responsabilidad">
        <p>Trive actúa como intermediario tecnológico y no es parte en el acuerdo de transporte entre usuarios. En consecuencia, Trive no es responsable por:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Accidentes, daños o lesiones ocurridos durante los trayectos.</li>
          <li>Incumplimientos entre usuarios.</li>
          <li>Pérdida de objetos durante el trayecto.</li>
          <li>Cancelaciones de última hora por parte de conductores o pasajeros.</li>
          <li>Acuerdos de recogida, precio, pago o cualquier otro arreglo hecho fuera de la Plataforma. Trive no controla lo que ocurre fuera de la aplicación y no garantiza la ocupación de los vehículos.</li>
        </ul>
        <p className="mt-3">Lo anterior sin perjuicio de los derechos irrenunciables de los consumidores reconocidos en la Ley 1480 de 2011.</p>
      </LegalSection>

      <LegalSection title="11. Propiedad intelectual">
        Todos los derechos sobre la marca Trive, su diseño, código fuente y contenidos de la Plataforma pertenecen a Trive Technologies SAS. Queda prohibida su reproducción, distribución o uso no autorizado.
      </LegalSection>

      <LegalSection title="12. Modificaciones">
        Trive se reserva el derecho de modificar estos Términos en cualquier momento, notificando los cambios a través de la Plataforma con al menos 15 días de anticipación. El uso continuado tras la notificación implica la aceptación de los nuevos términos.
      </LegalSection>

      <LegalSection title="13. Ley aplicable y jurisdicción">
        Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a la jurisdicción de los jueces competentes de la ciudad de Cali, Colombia, sin perjuicio del derecho a acudir ante la Superintendencia de Industria y Comercio (SIC) como autoridad de protección al consumidor.
      </LegalSection>
    </LegalLayout>
  )
}
