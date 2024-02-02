import * as React from "react"
export const TeacherLogo: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={170}
            height={35}
            fill="none"
        >
            <circle cx={152.5} cy={17.5} r={16.5} fill="#B2AD96" />
            <circle cx={152.5} cy={17.5} r={16.5} fill="url(#a)" />
            <circle cx={152.5} cy={17.5} r={16.5} stroke="#F7F9FF" strokeWidth={2} />
            <circle cx={107.5} cy={17.5} r={16.5} fill="#B2AD96" />
            <circle cx={107.5} cy={17.5} r={16.5} fill="url(#b)" />
            <circle cx={107.5} cy={17.5} r={16.5} stroke="#F7F9FF" strokeWidth={2} />
            <circle cx={62.5} cy={17.5} r={16.5} fill="#FFC7E0" />
            <circle cx={62.5} cy={17.5} r={16.5} fill="url(#c)" />
            <circle cx={62.5} cy={17.5} r={16.5} stroke="#F7F9FF" strokeWidth={2} />
            <circle cx={17.5} cy={17.5} r={16.5} fill="#FFDBDE" />
            <circle cx={17.5} cy={17.5} r={16.5} fill="url(#d)" />
            <circle cx={17.5} cy={17.5} r={16.5} stroke="#F7F9FF" strokeWidth={2} />
            <defs>
                <pattern
                    id="a"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#e" transform="scale(.01389)" />
                </pattern>
                <pattern
                    id="b"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#e" transform="scale(.01389)" />
                </pattern>
                <pattern
                    id="c"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#f" transform="scale(.01389)" />
                </pattern>
                <pattern
                    id="d"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#g" transform="scale(.01389)" />
                </pattern>
                <image
                    xlinkHref="data:image/png;base64,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"
                    id="e"
                    width={72}
                    height={72}
                />
                <image
                    xlinkHref="data:image/png;base64,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"
                    id="f"
                    width={72}
                    height={72}
                />
                <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAKDElEQVR4Ae3Ba2ydd33A8e/v/3/OzT6+X+MrycnVxK1zcUrT0IZCq4a00G3A0ChryxCTOm0vRjuJQaVOaHs1bZNgiDKgomMTFUgrzQpd2kFZaZPQpEmdNHEcx7nVudRJfGzH13Oe5zdsydGJfXzs2Oc8zgt/PvK5HYMvsmQm4gjyaZbMyLAkI8OSjAxLMjIsyciwJCPDkowMSzIyLMnIsCQjwyIzxsGxAUQsiWQ/yeQAioc1AUBYbA6LwIhDT3wP5y+9zOXePVzp24/rDpMqL1xLTeVOVtQ/SlnRZjx1WQwOPhIxXO07wNuHnyDe34aizGRopJvOs9/j5LnvU1O5k01N/0QkXIvfHHx0sedV3jjwGVxvlLlS9ei+tIueq79l+5ZdlBRuxE8Gn7jeMG8d+lNcb5T5GEv08ut9O4n3t+Eng0/OnP8xY4leFiKR7OONA3/EWCKOXwy+EAaH3icbhka6OXLi7zBi8IPBF0ogEORmOFb4wo5aRISpTp57jsHhs/jBrl/19WfwwSMPXCHo7OFo1zVm8+C2Sv7j7zfwF4/EGB52efPQVVKpuoRCVVSU3Emu2fWrvv4MPlhRe4p/+MsPaKzJ4/CJfnoHEqSqr4rw6IN1fPtrzTz5aIzq0hC4ytaWUn7w83MMDrukUk0Sa3gMVY9ccvDJ0GgeeB6PfbKWx3fWcfBkP/va+6gqCbF5ZQH1VRHUU8ZpUpmUFzI8+XiMp/7xKKl6et/ECHjkloNPhkfzQBQRw7iWWAEtKwqYpJ7iesrIqIcxQiRkmKDw+I46/vZf2kkkPSapugyPXiXgFJJLDj4ZGo7yTnucn79+GRQ++4ll1FRFKIk6TNrT1ss77X2IwOfvr6WiJMi44miA9bEoB4/3kyrpDhJwCsklB59cGylg4/pCNjaVAQKqfPPZDr7x5VVM2tZSyraWUqayFlpWF3LweD+pgoFScs3gk6GRCKiHJhVNeqirKL9nhBuIgAipVGF5TT6pHCdKKBgl1ww+GRmLAMrpi8P86p2rILBtYyk/2X0ehOt2/d8lXtnbw1T5xQFSLSu/D9f1yDWDT+5oegtNBhkddfGSHuPubS1n37u99PYnmNS0PEpzLMo0VhiXH7HkhS01lZ9E1SXXHHxgxOP+O3aDCmsao6xpjIJC72AScYSSwiCoMi5Wl0c6t9Xlse/5bWzZWMapC0MM9HXwnRfixK8Vk0sGH1SWfsCHaju5gcC3ftzF019eBarM5uOt5WxpLuHZ/+ziWy+connFMf7s08+Sa4acEzY17UE9S6oTF0c4dX6IzjODXOodZTYJV3n6X9tZWZ+PDnu81zVArLaTXHPIMdczNH3oGKiQKqTKIzvqiA8kqK0MMZv9Hf18YUctaxry2b6pjIuXR+iJV5BrDjmmKtRXdDNVQ3WEhuoI11nhSnyMsoIA6dy5rggRRRWMQE1VkB+8eC+55pBj1rgEnASZeAJPf7udT22vpmxdEemI8fjRy19iRc1JIuEhDnZsYve++7HWI5cccszzDK5nmIlY4ZvfPc5jDzewalmEGYly6MQGfrlnJ5Os9cg1Bx+cudRAWeEV0lFXeebP16Cecisy5Ji1Li/95g8Q6zIT9ZRblcEHx8+u47mXvoIaj0zECGKFW4mDT/5n3wPsb2/l3k2vUVd5jrzwEPH+ds73nCU+kOCD3jHiAwkefaiO5lgBtwoHH13pK+Onv/pjVA0KHDr2FCfOvIgIPLy9mu994zbKCgPcShwWgYiHAEaU8qIg3/naej57Xw3qKbcah0V0b2slzzzxMSqiDuoptyLDIvrER+qoiDrcyhyySQEDYgSEWYlwcxRQbiTklEMWiBVCFZZAicXmCeIIcxGoCjFXrmexK0soqgujqqCAgnpMUE9BAQWUCeoq49QDd9BjrNdDk8rNcFgAcYRIvUO42gEDKNe5LlhLRl3965irF9u/xKAtxebze0Iq1wNryEwgXyAZ9xi5kGTssgvCrAzzoRCqdChpDRNe5oAAyg02fxhi9WR0tOd2Rt0IszlyeSO7u/4QYbpoHnzqHvCUzBTwwCk0RNcGKdoQxuYbZmO4WQLR1UHyVwZAmNGBY3D7GmZh2H/pI2QSHy3lR+8+iRWmUYUH7oJX94IR5k7B5glFt4UIVztkYrgZAgXrggQrLLMxAmcvQMMyZmQE2i7cjYhHesoPDz3FUKKQdLa2wIGjMJZgfgTyVgSINDigpGWYK4WCtUECxZa52ncY7rydjE7GmxhJ5DOd8ovOz3Oyt5l0iguguBBOdbNgkboAkXoHlGkMc5QfCxAosdwMa+BYFyyvZUbXxvLpjK9jqhO9H2ZXxxeZyYP3wH+/TtbkNQYIllmmMsxBsNQSWuYwH20dsKUZXI+0rMDb57ci4jFpMBHlh4f+BmOYRhW2t8KvfwfWkjWqkL8miAkKqQyzECvkxQKgzNuRTmhawYyO9GzDVcuk5979Kv2j5aRTVw2uC+9fIutEILoqCMJ1hlmEqiwmKCzE0ZPQvApcl7RGEvl09TaBKP97+iGOXm4lHRHYvhl+exBEyAmn2BAst0wyZCAGIvUBUBZEFTrOwroYaSlC26VWzvat5r+OfwVhOlXY8VHY9RtQJXcU8pcHEMsEQwahSgexZMWhY9C8EpT09l+4m38/8teoCumsboTLV6H/GjknjhCqdhhnmIlCqNqSLcZAVzfE6khr9fJyvrihiHCQaYIBaFkLe9vwTaQ+gAgYZmCjBidqyKb970HreqaJ1cIjg6dpfOMMX91wlXCI61Rh50fh5TfAGHwjBsI1DoYZhKss6pFV1sB7nbB2OdfVVsJfFZwl8P4g42rf7uaJpvfJizChZS0cOw1Dw/guXOtgSEcgUGrJhbYO2LAWPA/KS+BPGnsJHO8DYYIHPL/rAA9/DKpKIVYH7V0sCnEEQxpOnsGGhVwwBva2wdYW+Pgd8M8HiumUPCa9daGT8+X38MIrcN9d8NLrLCpDGsEKi3rkzKluqKmEn+2GpCf8m9dIHAfE8P1+l2CkGNeD51+CpMuiMkylECyx5NrPXgXXY8IQDi4GV10GAkWgTDDCvEVCZIVhChMWTFjINSNcV84oZYxinRCN3iAICyLAQ9tBhAUzTOEUGjD4RoGNEgcE3AR1OoIIC6LAK2/C/XeyYIYpAkUGFN94wAbpZ4Iqyx2PRGKUheq/BtZCOMSCGFKoC4Fii59KSVLNGJNikRDDg5fJhtf2ws67QZV5M6SwIcEEBT+tkwEcPCbVFZTh9XWRDWMJOHcRGpYxb4YUNt/gJw9oop9UpYVV0HucbPndYbirBTxlXgwpbL7gJ4PHRhngBqpUjF7BWLJm72HY3MS8GBMQJtmQwU9NMohBuYHnUm1G8TyXbDndDSsbAeWmmcLmEGKFcSbCrBproLSIrGjiGulsqYrR80EH2fTaW3DfVm7a/wN2DVl+EOozSwAAAABJRU5ErkJggg=="
                    id="g"
                    width={72}
                    height={72}
                />
            </defs>
        </svg>
    )
}