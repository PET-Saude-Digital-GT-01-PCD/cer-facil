import MICROS_PB from '../../data/micro.json';
import CORES_REGIOES from '../../data/colors.json';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MapCaptions() {
  return (
    
    <Accordion collapsible>
      <AccordionItem value="map-captions">
        <AccordionTrigger className="items-center font-normal p-0">
          Legendas
        </AccordionTrigger>
        <AccordionContent className="text-justify font-normal">
          <div className='flex p-5'>
            <div className='grid grid-cols-1 gap-x-6 gap-y-2 w-fit'>
              {MICROS_PB.map((regiao) => {
                const corObj = CORES_REGIOES[regiao.id - 1];
                return (
                  <div 
                    key={regiao.id} 
                    className='flex items-center justify-start gap-2'
                  >
                    <div
                      className='w-3 h-3 rounded-[2px] flex-shrink-0 opacity-90'
                      style={{ 
                        backgroundColor: corObj ? corObj.hex : '#CCCCCC' 
                      }}
                    />
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#333',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {regiao.regiao}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default MapCaptions;