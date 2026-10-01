import React, { useState } from 'react';
import { X, Phone, MessageCircle, Mail, MapPin, Download, Share2, Check, ExternalLink, QrCode } from 'lucide-react';
import { WHATSAPP_DISPLAY, getWhatsAppUrl } from '../data/products';
import { SocialIcons } from './SocialIcons';

interface VisitingCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitingCardModal: React.FC<VisitingCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  if (!isOpen) return null;

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Tiger Foam & Mattress
ORG:Tiger Foam and Mattress Industries Ltd.
TITLE:Corporate Office & Factory Sales
TEL;TYPE=CELL,VOICE:+8801700000000
TEL;TYPE=WORK,VOICE:+8801800000000
EMAIL:sales@tigerfoamandmattress.com
URL:https://tigerfoamandmattress.com
ADR;TYPE=WORK:;;Plot 42-45 Industrial Growth Zone, Masterbari;Gazipur;Dhaka;1700;Bangladesh
NOTE:Manufacturer of high-density industrial polyurethane foam & orthopaedic mattresses. Direct WhatsApp inquiry enabled.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Tiger_Foam_And_Mattress_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white/80 dark:bg-slate-800/80 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Corporate Card Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-8 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Official Digital Business Card
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
                Tiger Foam & Mattress
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Industrial Foam & Sleep Engineering
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-extrabold text-xl shadow-inner">
              TF
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <div>
              <p className="font-semibold text-white">Commercial & Wholesale Desk</p>
              <p className="text-slate-400">Direct Factory Dispatch</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold">
                Available on WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* Card Body & Quick Actions */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Primary Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={getWhatsAppUrl('Hello Tiger Foam & Mattress! I have saved your digital visiting card and would like to inquire about products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </a>
            
            <a
              href="tel:+8801700000000"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct</span>
            </a>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3.5 text-sm bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-400 dark:text-slate-400">Official Sales Hotline</p>
                <p className="font-medium text-slate-900 dark:text-white">{WHATSAPP_DISPLAY}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-slate-400 dark:text-slate-400">Email Inquiries</p>
                <p className="font-medium text-slate-900 dark:text-white">sales@tigerfoamandmattress.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-slate-400 dark:text-slate-400">Factory & Warehouse Depot</p>
                <p className="font-medium text-slate-900 dark:text-white text-xs leading-relaxed">
                  Plot 42-45 Industrial Growth Zone, Masterbari, Gazipur, Dhaka Division, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Row in Card */}
          <div className="pt-1 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Social Channels:</span>
            <SocialIcons iconClassName="w-8 h-8" />
          </div>

          {/* QR Code toggle section */}
          {showQr ? (
            <div className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-xl text-center space-y-2">
              <div className="w-40 h-40 mx-auto bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center border border-slate-300 dark:border-slate-700">
                {/* SVG QR Code representation */}
                <div className="p-2 bg-white rounded shadow-xs">
                  <div className="grid grid-cols-6 gap-1 w-32 h-32 p-1">
                    <div className="col-span-2 row-span-2 bg-slate-900 rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-slate-900" />
                    <div className="col-span-2 row-span-2 bg-slate-900 rounded-xs" />
                    <div className="col-span-6 flex justify-between">
                      <div className="w-3 h-3 bg-slate-900" />
                      <div className="w-4 h-3 bg-slate-900" />
                      <div className="w-3 h-3 bg-slate-900" />
                    </div>
                    <div className="col-span-2 row-span-2 bg-slate-900 rounded-xs" />
                    <div className="bg-slate-900" />
                    <div className="bg-slate-900" />
                    <div className="col-span-2 row-span-2 bg-slate-900 rounded-xs" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Scan with camera to open Tiger Foam & Mattress</p>
              <button
                onClick={() => setShowQr(false)}
                className="text-xs text-slate-700 dark:text-slate-300 underline font-semibold"
              >
                Hide QR Code
              </button>
            </div>
          ) : null}

          {/* Action Bar: Save vCard, QR Code, Share */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <button
              onClick={handleDownloadVCard}
              className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save to Contacts</span>
            </button>

            <button
              onClick={() => setShowQr(!showQr)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg font-semibold transition-colors"
            >
              <QrCode className="w-3.5 h-3.5" />
              <span>{showQr ? 'Hide QR' : 'Show QR'}</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-lg font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 dark:text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Card</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
            Tiger Foam & Mattress Industries Ltd. · All products certified 100% pure polyurethane
          </p>
        </div>
      </div>
    </div>
  );
};
