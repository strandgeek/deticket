import { ExternalLinkIcon, MailIcon, PhoneIcon, QrcodeIcon } from "@heroicons/react/outline";
import { FC } from "react";
import tezosIconSrc from "../assets/images/tezos-icon.png";

export const TicketTokenListingItem: FC<{ ticketToken: any }> = ({
  ticketToken,
}) => {
  return (
    <div
      key={ticketToken.name}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={ticketToken.imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="mt-4 flex space-x-1 text-sm text-gray-500">
          <time dateTime={ticketToken.datetime?.toISOString()}>April 22</time>
          <span aria-hidden="true">&middot;</span>
          <span>6 PM</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span className="hover:underline">{ticketToken.type}</span>
          </p>
          <a href={""} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {ticketToken.name}
            </p>
          </a>
        </div>
      </div>
      <div className="bg-white border border-t-gray-200">
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a className="cursor-pointer relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <QrcodeIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3">View Ticket</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            <a className="cursor-pointer relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <ExternalLinkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3">Transfer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};